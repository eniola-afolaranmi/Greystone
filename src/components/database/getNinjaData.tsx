import { createClient } from "@supabase/supabase-js";
import type { NinjaData } from "../types";

const supabase = createClient(process.env.NEXT_PUBLIC_URL!, process.env.NEXT_PUBLIC_ANON_KEY!, {
  auth: { persistSession: false },
});

export default async function GetData(ninjaName: string): Promise<any> {
  //This is a super quick call to get the ninja's belt id for the puropse of filtering the rest of their data.
  // const beltID = await supabase
  //   .from("Ninjas")
  //   .select("current_belt_id")
  //   .eq("name", ninjaName)
  //   .then((resolve) => {
  //     // console.log(resolve);
  //     return resolve.data![0].current_belt_id;
  //   });

  //This fetches all the relevant data for a specific ninja. It then puts it into an object called finishedData
  //and returns it for the rest of the server to use in creating the UI/UX for the client.
  const progress = await supabase
    //This grabs all the relevant data from the DB
    //.select() goes through each table, grabbing the needed data as it goes.
    //Each table has a foreign key associated with the nested table.
    .from("Ninjas")
    .select("*, Belts(belt_name, Levels(level_name, Activities(activity_id, activity_name, Notes(note, focus_level))))")
    .order("activity_id", { foreignTable: "Belts.Levels.Activities", ascending: true })
    .eq("name", ninjaName)
    .then((resolve) => {
      console.log(resolve);
      //Checks to see if the packet is not null and that resolve.data has something in it.
      if (resolve.data != null && Object.keys(resolve.data).length > 0) {
        //Convert the fetched JSON into usable string data for the webpage.
        const parsedData = JSON.parse(JSON.stringify(resolve.data[0]));
        console.log(parsedData);
        //This object stores all the ninja's data and returns it.
        let finishedData: NinjaData = {
          current_belt: parsedData.Belts.belt_name,
          currentActivityID: parsedData.current_activity_id,
          beltData: parsedData.Belts.Levels,
        };
        return finishedData;
      }
    })
    .then(undefined || null, (err) => <>Something went wrong! {err}</>);
  return progress;
}
