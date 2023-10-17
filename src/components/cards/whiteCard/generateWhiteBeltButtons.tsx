import GetData from "../../getData";
import GenerateButton from "../generateActivityButton";

//This function is designed to loop over each level and generate buttons that display
//the relevant data for each activity.
export default async function GenerateWhiteBeltButtons(ninjaName: string) {
  let parsedLevels: any[] = [];
  let finalData: any[] = [];
  let index = 1;

  let ninjaData = await GetData(ninjaName).then((resolve) => {
    return resolve;
  });

  const allWhiteLevels = ninjaData.whiteBeltData;

  //This loop goes over each level in the object and then goes through each activity to generate button components for them.
  for (let level = 0; level < Object.keys(allWhiteLevels).length; level++) {
    let currentLevel = allWhiteLevels[level].Activities;
    parsedLevels.push([]);
    //Loop over each activity inside a level.
    //Creates a react component for each activity. The components are buttons with the associated activity name, note, status, etc.
    //Each activity newly generated button is then placed into it's levels nested array.
    //Item is each individial activity.
    for (let item = 0; item < Object.keys(currentLevel).length; item++) {
      parsedLevels[level].push(
        GenerateButton(currentLevel[item], index, ninjaData.currentActivityID, currentLevel[item].Notes)
      );
      index++;
    }
  }
  for (let element = 0; element < Object.keys(parsedLevels).length; element++) {
    finalData.push(
      <div
        key={"level" + element}
        className="flex flex-row items-end m-1"
      >
        {parsedLevels[element]}
      </div>
    );
  }
  return <pre>{finalData}</pre>;
}
