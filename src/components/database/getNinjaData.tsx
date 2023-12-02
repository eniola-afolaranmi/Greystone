import { createClient } from "@supabase/supabase-js";
import { NinjaData } from "../../types/databaseTypes";

const supabase = createClient(process.env.NEXT_PUBLIC_URL!, process.env.NEXT_PUBLIC_ANON_KEY!, {
  auth: { persistSession: false },
});

//This async-function is to get a given ninja's data. When called it needs a valid name in the format "firstname.lastname".
export default async function getNinjaData(ninjaName: string | undefined) {
  //.from() determines which database we are accessing.
  //.select() determines which tables, foreign tables, and columns we are grabbing.
  //In order for a table to access a foreign table, it must have a foreign key associated with the foreign table (typically the primary key)
  //.eq(), or equate, filters the rows so we only get ones that have what we are looking for (the ninja's name in this case).
  //.then() is from async. It runs an unnamed arrow function, that we define, once the await promise returns.
  return await supabase
    .from("Ninjas")
    .select("*, Notes(id, activity_id, focus_level, note)")
    .order("id", { ascending: true })
    .eq("name", ninjaName)
    .then((resolve) => {
      //Checks to see if the packet is not null and that resolve.data has something in it.
      if (resolve.data != null && Object.keys(resolve.data).length > 0) {
        //Convert the fetched JSON into usable string data.
        const parsed = JSON.parse(JSON.stringify(resolve.data[0]));
        const ninjaData: NinjaData = {
          id: parsed.id,
          name: parsed.name,
          currentActivity: parsed.current_activity_id,
          currentBelt: parsed.current_belt_id,
          notes: parsed.Notes.reverse(),
        };
        return ninjaData;
      }
    });
  // .then(undefined || null, (err) => <>Something went wrong! {err}</>);
}
