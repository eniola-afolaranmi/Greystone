import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.NEXT_PUBLIC_URL!, process.env.NEXT_PUBLIC_ANON_KEY!, {
  auth: { persistSession: false },
});

export default async function getData() {
  const data = await supabase
    .from("Belts")
    .select("belt_name , Levels(Activities(*))")
    .order("belt_id", { ascending: true })
    .then((resolve) => {
      return resolve.data;
    });
}
