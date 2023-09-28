import GetData from "../getData";
import { NinjaData } from "../types";
import generateActivityButton from "./generateActivityButton";

//This function is designed to loop over each level and generate buttons that display
//the relevant data for each activity.
export default async function GenerateWhiteBelt() {
  let parsed_levels: any[] = [];
  let count = 0;

  let ninjaData: any = await GetData("byron.corbett").then((resolve) => {
    return resolve;
  });
  const allWhiteLevels = ninjaData.whiteBeltData;

  for (let i = 0; i < Object.keys(allWhiteLevels).length; i++) {
    let current_level = allWhiteLevels[i].Activities;
    parsed_levels.push([]);
    //Loop over each activity inside a level.
    //Creates a react component for each activity. The components are buttons with the associated activity name, note and status.
    //Each activity newly generated button is then placed into it's levels nested array.
    for (let x = 0; x < Object.keys(current_level).length; x++) {
      parsed_levels[i].push(generateActivityButton(current_level[x], allWhiteLevels.indexOf(x), current_level[x].Notes));
      count++;
    }
  }
  return <pre>{JSON.stringify(ninjaData, null, 2)}</pre>;
}
