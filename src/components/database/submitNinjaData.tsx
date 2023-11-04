import { createClient } from "@supabase/supabase-js";
const DB_URL: string = process.env.NEXT_PUBLIC_URL!;
const DB_ANON_KEY: string = process.env.NEXT_PUBLIC_ANON_KEY!;
const supabase = createClient(DB_URL, DB_ANON_KEY);

//Used in getDatabaseData()
interface DatabaseData {
  ninjaID: number;
  currentActivityID: number;
  currentBeltID: number;
  activityID: number;
}

//This Function is used for requesting and digesting data from the database. It returns an object with the relevant data.
export async function getDatabaseData(name: string, activityName: string) {
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

//This function is for submitting/inserting new notes into supabase
export default async function submitNote(ninjaName: string, note: string, activityName: string, focusLevel: number) {
  const data = await getDatabaseData(ninjaName, activityName).then((resolve) => {
    console.log("POST", resolve);
    return resolve;
  });
  await supabase
    .from("Notes")
    .upsert({ activity_id: data.activityID, ninja_id: data.ninjaID, note: note, focus_level: focusLevel });
}
