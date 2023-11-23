import compileData from "../database/compileData";
import GenerateButton from "./generateActivityButton";

//This function is designed to loop over each level and generate buttons that display
//the relevant data for each activity.
export default async function GenerateSessionCard(ninjaName: string | undefined) {
  let parsedLevels = [];
  let finalData = [];
  let index = 1;

  // if (ninjaName) {
  //   ninjaData = await getNinjaData(ninjaName).then((resolve) => {
  //     return resolve;
  //   });
  // } else {
  //   ninjaData = await getSenseiData().then((resolve) => {
  //     return resolve;
  //   });
  // }

  //Perfect spot to use a ternary instead of an if()
  const ninjaData = await compileData(ninjaName);

  // for (let belt = 0; belt < Object.keys(ninjaData.beltData).length; belt++) {
  //   //This loop goes over each level in the object and then goes through each activity to generate button components for them.
  //   for (let level = 0; level < Object.keys(ninjaData[belt].beltData).length; level++) {
  //     let currentLevel = ninjaData[belt];
  //     parsedLevels.push([]);
  //     //Loop over each activity inside a level.
  //     //Creates a react component for each activity. The components are buttons with the associated activity name, note, status, etc.
  //     //Each activity newly generated button is then placed into it's levels nested array.
  //     //Item is each individial activity.
  //     for (let item = 0; item < Object.keys(currentLevel).length; item++) {
  //       parsedLevels[level].push(
  //         GenerateButton(
  //           currentLevel[item],
  //           index,
  //           ninjaData.currentActivityID,
  //           currentLevel[item].Notes > 0 ? currentLevel[item].Notes : undefined
  //         )
  //       );
  //       index++;
  //     }
  //   }
  //   //This loop goes through each level and order the buttons like the physical session cards.
  //   for (let button = 0; button < Object.keys(parsedLevels).length; button++) {
  //     finalData.push(
  //       <div
  //         key={"level" + button}
  //         className="flex flex-row items-end m-1"
  //       >
  //         {parsedLevels[button]}
  //       </div>
  //     );
  //   }
  // }
  // return <pre>{finalData}</pre>;
}
