import GetData from "../../getData";
import GenerateButton from "../generateActivityButton";

//This function is designed to loop over each level and generate buttons that display
//the relevant data for each activity.
export default async function GenerateWhiteBeltButtons(ninjaName: string) {
  let parsed_levels: any[] = [];
  let index = 1;
  let ninjaData = await GetData(ninjaName).then((resolve) => {
    return resolve;
  });

  const allWhiteLevels = ninjaData.whiteBeltData;
  // console.log(ninjaData);

  //level is for each individial level in the belt.
  for (let level = 0; level < Object.keys(allWhiteLevels).length; level++) {
    let currentLevel = allWhiteLevels[level].Activities;
    parsed_levels.push([]);
    //Loop over each activity inside a level.
    //Creates a react component for each activity. The components are buttons with the associated activity name, note, status, etc.
    //Each activity newly generated button is then placed into it's levels nested array.
    //Item is each individial activity.
    for (let item = 0; item < Object.keys(currentLevel).length; item++) {
      parsed_levels[level].push(
        GenerateButton(currentLevel[item], index, ninjaData.currentActivityID, currentLevel[item].Notes)
      );
      index++;
    }
  }
  return <pre>{parsed_levels}</pre>;
}
