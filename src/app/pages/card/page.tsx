import { useSearchParams } from "next/navigation";
import GenerateWhiteBelt from "../../../components/cards/generateWhiteBelt";

function GetName() {
  const searchParams = useSearchParams();
  return searchParams.get("ninjaName");
}

export default function Card() {
  return (
    <div className="cn__card-level">
      <GenerateWhiteBelt />
    </div>
  );
}
