import CardTemplate from "../cardTemplate";
import GenerateWhiteBeltButtons from "./generateWhiteBeltButtons";

export default async function WhiteBeltCard(ninjaName: any) {
  const beltData = await GenerateWhiteBeltButtons(ninjaName.ninjaName).then((resolve) => {
    return resolve.props.children;
  });
  return (
    <pre>
      <div className="grid grid-cols-2 mt-16 text-[#034586] justify-items-center">
        <CardTemplate
          beltName="White"
          beltData={beltData}
          ninjaImage="/beltImages/white-belt-ninja.png"
        />
      </div>
    </pre>
  );
}
