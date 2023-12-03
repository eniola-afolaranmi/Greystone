import compileData from "../database/compileData";
import getImpactData from "../database/getImpactData";
import GenerateButton from "./generateButton";

//This function is designed to loop over each level and generate buttons that display
//the relevant data for each activity.
export default async function GenerateSessionCard(ninjaName: string | undefined) {
  let parsedProgress = Array();
  let ninjaData;

  if (ninjaName) {
    ninjaData = await compileData(ninjaName).then((resolve) => {
      return resolve;
    });
  } else {
    ninjaData = await getImpactData().then((resolve) => {
      return resolve;
    });
  }
  for (let beltIndex = 0; beltIndex < Object.keys(ninjaData.progress).length; beltIndex++) {
    //This loop goes over each level in the object and then goes through each activity to generate button components for them.
    parsedProgress.push([]);
    for (let levelIndex = 0; levelIndex < Object.keys(ninjaData.progress[beltIndex].Levels).length; levelIndex++) {
      let currentLevel = ninjaData.progress[beltIndex].Levels[levelIndex];
      parsedProgress[beltIndex].push([]);
      //Loop over each activity inside a level.
      //Creates a react component for each activity. The components are buttons with the associated activity name, notes, status, etc.
      //Each activity's newly generated button is then placed into its level's nested array.
      for (let activityIndex = 0; activityIndex < Object.keys(currentLevel.Activities).length; activityIndex++) {
        // parsedProgress[beltIndex][levelIndex].push([]);
        const currentActivity = currentLevel.Activities[activityIndex];
        if (currentActivity.id <= ninjaData.currentActivity) {
          parsedProgress[beltIndex][levelIndex].push(GenerateButton(currentActivity, ninjaData.currentActivity));
        }
        //  else {
        //    parsedProgress[beltIndex][levelIndex].push(undefined);
        //  }
      }
      parsedProgress[beltIndex][levelIndex] = (
        <div
          key={"level" + levelIndex}
          className="flex flex-row items-start m-1"
        >
          {parsedProgress[beltIndex][levelIndex]}
        </div>
      );
    }
  }
  ninjaData.progress = parsedProgress;
  //This loop goes through each level and order the buttons like the physical session cards.
  // for (let button = 0; button < Object.keys(parsedLevels).length; button++) {
  //   console.log(
  //     "\n\n",
  //     "++++++++++++++++++++++++++++++++",
  //     "\n\n",
  //     parsedLevels,
  //     "\n\n",
  //     "================================",
  //     "\n\n"
  //   );
  //   finalData.push(
  //     <div
  //       key={"level" + button}
  //       className="flex flex-row items-end m-1"
  //     >
  //       {parsedLevels}
  //     </div>
  //   );
  // }

  return <pre>{ninjaData}</pre>;
}
