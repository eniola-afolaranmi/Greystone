import getImpactData from "./getImpactData";
import getNinjaData from "./getNinjaData";
import { CompiledData } from "../../types/databaseTypes";

export default async function compileData(ninjaName: string | undefined) {
  //Get the curriculumn data
  const impactData = await getImpactData().then((resolve) => {
    return resolve;
  });
  //Get the ninja's data
  const ninjaData = ninjaName
    ? await getNinjaData(ninjaName).then((resolve) => {
        return resolve;
      })
    : undefined;

  // console.log(
  //   "\n++++++++++++++++++++++++++++++++\n++++++++++++++++++++++++++++++++\n",
  //   impactData[0].Levels[0].Activities,
  //   "\n================================\n================================\n",
  //   ninjaData,
  //   "\n================================\n================================\n"
  // );

  if (ninjaData && Object.keys(ninjaData.notes).length > 0) {
    //This is an object that will store the combined data of impactData and ninjaData.
    //It will be returned for the component(s) to use to generate the session cards and website.
    let compiledData: CompiledData = {
      id: ninjaData.id,
      name: ninjaData.name,
      currentActivity: ninjaData.currentActivity,
      currentBelt: ninjaData.currentBelt,
      progress: impactData,
    };

    //This for loop will go over each note and search for its matching activity in impactData.
    for (let noteIndex: number = 1; noteIndex != Object.keys(ninjaData.notes).length; noteIndex++) {
      let currentNote = ninjaData.notes[noteIndex];
      //Loop over each belt.
      impactData.findIndex((belt: any, beltIndex: number) => {
        //Loop over each Level.
        belt.Levels.findIndex((level: any, levelIndex: number) => {
          //Loop over each activity until the matching activity for the note is found.
          level.Activities.findIndex((activity: any, activIndex: number) => {
            //Create a copy of the activity.
            const currentActivity = compiledData.progress[beltIndex].Levels[levelIndex].Activities[activIndex];
            // console.log(activIndex, activity);
            //Create a new activity that combines the default/blank activity and the note that matches it.
            const newActivity =
              activity.id == currentNote.activity_id
                ? { ...currentActivity, notes: { ...currentNote } }
                : { ...currentActivity, notes: {} };
            compiledData.progress[beltIndex].Levels[levelIndex].Activities[activIndex] = newActivity;
            //This is just for debugging. Will leave here for now.
            // compiledData.progress[beltIndex].Levels[levelIndex].Activities[activIndex].notes
            //   ? console.log(compiledData.progress[beltIndex].Levels[levelIndex].Activities[activIndex])
            //   : false;
          });
        });
      });
    }
    return compiledData;
  } else {
    return <>Something went wrong in compileData.tsx!</>;
  }
}
