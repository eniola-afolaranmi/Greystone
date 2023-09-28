import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import type { NinjaData } from "./types";
import { finished } from "stream";

const supabase = createClient(process.env.NEXT_PUBLIC_URL!, process.env.NEXT_PUBLIC_ANON_KEY!, {
  auth: { persistSession: false },
});

export default async function GetData(ninjaName: string): Promise<any> {
  const notes = await supabase
    .from("Ninjas")
    .select("Notes(note)")
    .eq("name", ninjaName)
    .then((data) => {
      return JSON.parse(JSON.stringify(data.data));
    });

  const progress = await supabase
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
          notes: notes[0],
          current_belt: parsedData[0].Belts.belt_name,
          currentActivityID: parsedData[0].current_activity_id,
          whiteBeltData: parsedData[0].Belts.Levels,
          yellowBeltData: null,
          orangeBeltData: null,
        };
        // console.log("finished data:", finishedData.whiteBeltData);
        return finishedData;
      }
    })
    .then(undefined || null, (err) => <>Something went wrong! {err}</>);
  return progress;
}
