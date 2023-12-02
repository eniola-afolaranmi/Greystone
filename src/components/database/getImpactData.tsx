import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.NEXT_PUBLIC_URL!, process.env.NEXT_PUBLIC_ANON_KEY!, {
  auth: { persistSession: false },
});

//This async function is for getting empty Impact curriculumn data. This data is to be used in creating the sensei page.
export default async function getImpactData() {
  //Refer to getNinjaData.tsx for detailed comments on the supabase call. They're basically the same thing.
  return await supabase
    .from("Belts")
    .select("belt_name, Levels(level_name, Activities(id, level_name, activity_name))")
    .order("id", { foreignTable: "Levels.Activities", ascending: true })
    .then((resolve) => {
      //Checks to see if the packet is not null and that resolve.data has something in it.
      if (resolve.data != null && Object.keys(resolve.data).length > 0) {
        //Convert the fetched JSON into usable string data.
        const data = JSON.parse(JSON.stringify(resolve.data));
        return data.reverse();
      }
    })
    .then(undefined || null, (err) => <>Something went wrong! {err}</>);
}
