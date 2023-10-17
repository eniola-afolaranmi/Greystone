import WhiteBeltCard from "../../../components/cards/whiteCard/whiteBelt";
import BackgroundImage from "../../../components/backgroundImage";
import { useSearchParams } from "next/navigation";

const GetName = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("ninjaName");
  return search;
};

export default function Card() {
  return (
    <pre>
      <div className="h-full">
        <div>
          <WhiteBeltCard ninjaName={"byron.corbett"} />
        </div>
      </div>
    </pre>
  );
}
