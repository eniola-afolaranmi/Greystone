import WhiteBeltCard from "../../../components/cards/whiteCard/whiteBelt";
import { useSearchParams } from "next/navigation";

const GetName = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("ninjaName");
  return search;
};

export default function Card() {
  return (
    <div>
      <pre>
        {/* @ts-ignore */}
        <WhiteBeltCard ninjaName={"byron.corbett"} />
      </pre>
    </div>
  );
}
