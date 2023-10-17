import { cookies } from "next/headers";

export default function getName() {
  return cookies().get("ninjaName");
}
