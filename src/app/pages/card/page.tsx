import GenerateSessionCard from "../../../components/cards/generateSessionCard";
import { useSearchParams } from "next/navigation";
import NinjaCard from "../../../components/cards/ninjaCard/ninjaCard";

export default async function Card() {
  const beltData = await GenerateSessionCard("byronius.maximus").then((resolve) => {
    return resolve.props.children;
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
