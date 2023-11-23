import GenerateSessionCard from "../../../components/cards/generateSessionCard";
import { useSearchParams } from "next/navigation";
import NinjaCard from "../../../components/cards/ninjaCard/ninjaCard";

const GetName = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("ninjaName");
  return search;
};

export default async function Card() {
  //@ts-ignore
  const beltData = await GenerateSessionCard("byron.corbett").then((resolve) => {
    // return resolve.props.children;
  });
  return (
    <pre>
      <div className="h-full">
        <div>
          <NinjaCard
            beltName="White"
            beltData={beltData}
          />
        </div>
      </div>
    </pre>
  );
}
