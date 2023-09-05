import { createClient } from "@supabase/supabase-js";
import { finished } from "stream";
const supabase = createClient(process.env.NEXT_PUBLIC_URL!, process.env.NEXT_PUBLIC_ANON_KEY!);

//This type-alias is used when parsing the relevant data for the Ninja from the returned API data.
interface NinjaData {
  notes: Object;
  current_belt: any;
  currentActivityID: any;
  whiteBeltData: Array<string> | null | undefined;
  yellowBeltData: Array<string> | null | undefined;
  orangeBeltData: Array<string> | null | undefined;
}

export default async function getNinjaData(ninjaName: string): Promise<any> {
  //Get all the relevant data on a given ninja
  //Select works like sql's join. Gets the needed data.
  //Order() orders the tables by a given column.

  //Get notes for the ninja.
  const ninjaNotes = await supabase
    .from("Ninjas")
    .select("Notes(note)")
    .eq("name", ninjaName)
    .then((data) => {
      return JSON.parse(JSON.stringify(data.data));
    });

  //Get some data associated with the ninja.
  await supabase
    .from("Ninjas")
    .select("*, Belts(belt_name, Levels(Activities(activity_id, activity_name)))")
    .order("activity_id", { foreignTable: "Belts.Levels.Activities", ascending: true })
    .eq("name", ninjaName)
    .then((data) => {
      //Convert the fetched JSON into usable string data for the webpage.
      const parsedData = JSON.parse(JSON.stringify(data.data));
      //Checks to see if the packet actually has something in it.
      if (Object.keys(data).length > 0) {
        //This object stores all the ninja's data and returns it.
        let finishedData: NinjaData = {
          notes: ninjaNotes[0],
          current_belt: parsedData[0].Belts.belt_name,
          currentActivityID: parsedData[0].current_activity_id,
          whiteBeltData: parsedData[0].Belts.Levels,
          yellowBeltData: null,
          orangeBeltData: null,
        };
        return new Promise((resolve) => {});
      }
    })
    //This catches any errors that might happen. A common one would be wrong spelling or the user not existing in the DB.
    .then(undefined || null, (err) => console.log("Something went wrong! Does the user exist?", err));
}
