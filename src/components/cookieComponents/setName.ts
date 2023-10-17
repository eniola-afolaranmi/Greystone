import { cookies } from "next/headers";

export default function setName(ninjaName: string) {
  if (!cookies().get("ninjaName") && ninjaName != "") {
    cookies().set({ name: "ninjaName", value: ninjaName });
  } else {
    console.log("Error in setting cookie ninjaName");
  }
}
