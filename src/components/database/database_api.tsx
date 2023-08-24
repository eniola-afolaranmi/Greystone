import { createClient } from "@supabase/supabase-js";
const DB_URL: string = process.env.NEXT_PUBLIC_URL!;
const DB_ANON_KEY: string = process.env.NEXT_PUBLIC_ANON_KEY!;
const supabase = createClient(DB_URL, DB_ANON_KEY);

//Used in getDatabaseData()
type DatabaseData = {
  ninjaID: number;
  currentActivityID: number;
  currentBeltID: number;
  activityID: number;
};

//This guy is, mostly, for the POSTs sent when inserting/updating the Notes table.
async function getDatabaseData(name: string, activityName: string) {
  const ninjaName = name.toLowerCase();
  //Get any needed ninja details.
  let ninjaDetails = await supabase
    .from("Ninjas")
    .select("*")
    .eq("name", ninjaName)
    .then((resolve) => {
      return JSON.parse(JSON.stringify(resolve.data));
    });

  //Get the needed activity data for updating any notes.
  let activityDetails = await supabase
    .from("Activities")
    .select("activity_id")
    .eq("activity_name", activityName)
    .then((resolve) => {
      return JSON.parse(JSON.stringify(resolve.data));
    });

  // console.log("ninja", ninjaDetails);
  console.log("activities", activityDetails);

  const finalData: DatabaseData = {
    ninjaID: ninjaDetails[0].id,
    currentActivityID: ninjaDetails[0].current_activity_id,
    currentBeltID: ninjaDetails[0].current_belt_id,
    activityID: activityDetails[0].activity_id,
  };
  console.log("final", finalData);
  return finalData;
}

export async function submitNote(ninjaName: string, note: string, activityName: string) {
  const data = await getDatabaseData(ninjaName, activityName).then((resolve) => {
    console.log("POST", resolve);
    return resolve;
  });
  await supabase.from("Notes").upsert({ activity_id: data.activityID, ninja_id: data.ninjaID, note: note });
}

//This type-alias is used when parsing the relevant data for the Ninja from the returned API data.
interface NinjaData {
  name: string;
  current_belt: any;
  currentActivityID: any;
  whiteBeltData: Array<string> | null | undefined;
  yellowBeltData: Array<string> | null | undefined;
  orangeBeltData: Array<string> | null | undefined;
}

//This Function is used for requesting and digesting data from the database. It returns an object with the relevant data.
export async function getNinjaData(ninjaName: string): Promise<any> {
  //Get all the relevant data on a given ninja
  //Select works like sql's join. Gets the needed data.
  //Order() orders the tables by a given column.
  // let finishedData: NinjaData;
  await supabase
    .from("Ninjas")
    .select("*, Belts(belt_name, Levels(Activities(activity_id, activityName, Notes(note))))")
    .order("activity_id", { foreignTable: "Belts.Levels.Activities", ascending: true })
    .eq("name", ninjaName)
    .then((data) => {
      //Convert the fetched JSON into usable string data for the webpage.
      const parsedData = JSON.parse(JSON.stringify(data.data));
      //Checks to see if the packet actually has something in it.
      if (Object.keys(data).length > 0) {
        //This object stores all the ninja's data and returns it.
        let finishedData: NinjaData = {
          name: parsedData[0].name,
          current_belt: parsedData[0].Belts.belt_name,
          currentActivityID: parsedData[0].currentActivityID,
          whiteBeltData: parsedData[0].Belts.Levels,
          yellowBeltData: null,
          orangeBeltData: null,
        };
        console.log("finished data", finishedData);
        return finishedData;
      }
    })
    //This catches any errors that might happen. A common one would be wrong spelling or the user not existing in the DB.
    .then(undefined || null, (err) => console.log("Something went wrong! Does the user exist?", err));
}
