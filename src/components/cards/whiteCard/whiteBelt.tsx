import CardTemplate from "../cardTemplate";
import GenerateWhiteBeltButtons from "./generateWhiteBeltButtons";

export default async function WhiteBeltCard() {
  const beltData = await GenerateWhiteBeltButtons("byron.corbett").then((resolve) => {
    return resolve.props.children;
  });
  return (
    <div>
      <CardTemplate
        levelIndex={1}
        activityButtons={beltData[0]}
      />
      <CardTemplate
        levelIndex={1}
        activityButtons={beltData[1]}
      />
    </div>
  );
}
