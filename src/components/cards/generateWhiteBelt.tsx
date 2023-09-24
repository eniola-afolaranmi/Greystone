import getNinjaData from "../getNinjaData";
import generateActivityButton from "./generateActivityButton";

export default async function GenerateWhiteBelt() {
  //Loop over each level inside activities param
  let parsed_levels: any[] = [];
  let count = 0;

  const ninjaName = "byron.corbett";

  const ninjaData = await getNinjaData(ninjaName);
  console.log("generate white belt", ninjaData);
  // const all_levels = ninjaData.whiteBeltData();

  // for (let i = 0; i < Object.keys(all_levels).length; i++) {
  //   let current_level = all_levels[i].Activities;
  //   parsed_levels.push([]);
  //   //Loop over each activity inside a level.
  //   //Creates a react component for each activity. The components are buttons with the associated activity name, note and status.
  //   //Each activity newly generated button is then placed into it's levels nested array.
  //   for (let x = 0; x < Object.keys(current_level).length; x++) {
  //     parsed_levels[i].push(generateActivityButton(current_level[x], all_levels.indexOf(x), current_level[x].Notes[0]));
  //     count++;
  //   }
  // }
  return <>Hello World</>;
}
