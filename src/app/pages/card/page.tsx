import GenerateSessionCard from "../../../components/cards/generateSessionCard";
import NinjaCard from "../../../components/cards/ninjaCard/ninjaCard";

export default async function Card() {
  const data = await GenerateSessionCard("byronius.maximus").then((resolve) => {
    return resolve.props.children;
  });
  console.log(data.progress[0]);
  return (
    <pre>
      <div className="h-full">
        <div>
          <NinjaCard
            beltName="White"
            beltData={data.progress[0]}
          />
          {/* <NinjaCard
            beltName="Yellow"
            beltData={data.progress[1]}
          /> */}
        </div>
      </div>
    </pre>
  );
}
