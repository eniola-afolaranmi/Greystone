import { createClient } from "@supabase/supabase-js";
import type { NinjaData } from "./types";

const supabase = createClient(process.env.NEXT_PUBLIC_URL!, process.env.NEXT_PUBLIC_ANON_KEY!, {
  auth: { persistSession: false },
});

export default async function GetData(ninjaName: string): Promise<any> {
  //This fetches all the notes related to the ninja from the DB.
  // const notes = await supabase
  //   .from("Ninjas")
  //   .select("Notes(*)")
  //   .eq("name", ninjaName)
  //   .then((data) => {
  //     return JSON.parse(JSON.stringify(data.data));
  //   });

  //This fetches all the relevant data for a specific ninja. It then puts it into an object called finishedData
  //and returns it for the rest of the server to use in creating the UI/UX for the client.
  const progress = await supabase
    //This grabs all the relevant data from the DB
    //.select() goes through each table, grabbing the needed data as it goes.
    //Each table has a foreign key associated with the nested table.
    .from("Ninjas")
    .select("*, Belts(belt_name, Levels(Activities(activity_id, activity_name, Notes(note)))))")
    .order("activity_id", { foreignTable: "Belts.Levels.Activities", ascending: true })
    .eq("name", ninjaName)
    .then((resolve) => {
      //Convert the fetched JSON into usable string data for the webpage.
      const parsedData = JSON.parse(JSON.stringify(resolve.data));
      //Checks to see if the packet actually has something in it.
      if (Object.keys(resolve).length > 0) {
        //This object stores all the ninja's data and returns it.
        let finishedData: NinjaData = {
          current_belt: parsedData[0].Belts.belt_name,
          currentActivityID: parsedData[0].current_activity_id,
          whiteBeltData: parsedData[0].Belts.Levels,
          yellowBeltData: null,
          orangeBeltData: null,
        };
        // console.log("GetData", parsedData[0].Belts.Levels[0].Activities[0].Notes);
        return finishedData;
      }
    })
    .then(undefined || null, (err) => <>Something went wrong! {err}</>);
  return progress;
}
