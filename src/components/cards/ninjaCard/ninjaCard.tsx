import CardTemplate from "../cardTemplate";
import GenerateSessionCard from "../generateSessionCard";

export default async function NinjaCard({ beltName, beltData }: any) {
  return (
    <pre>
      <div className="grid grid-cols-2 mt-16 text-[#034586] justify-items-center">
        <CardTemplate
          beltName={beltName}
          beltData={beltData}
          ninjaImage="/BeltImages/white-belt-ninja.png"
        />
      </div>
    </pre>
  );
}
