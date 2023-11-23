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

  console.log(
    "\n================================\n================================\n",
    impactData[0].Levels[0],
    "\n================================\n================================\n",
    ninjaData,
    "\n================================\n================================\n"
  );

  if (ninjaData && Object.keys(ninjaData.notes).length > 0) {
    let compiledData: CompiledData;
    for (let noteIndex: number = 0; noteIndex < Object.keys(ninjaData.notes).length; noteIndex++) {
      let currentNote = ninjaData.notes[noteIndex];
      // let activ = impactData.find((belt: any) => {
      //   belt.Levels.find((level: any) => {
      //     level.Activities.find((activity: any) => {
      //       const thing = activity.activity_id == currentNote.activity_id ? { activity, currentNote } : false;
      //       console.log(thing);
      //     });
      //   });
      // });
    }
    return compileData;
  } else {
    return <>Something went wrong in compileData.tsx!</>;
  }

  // for (let belts: number = 0; belts < Object.keys(impactData).length; belts++) {
  //   for (let levels: number = 0; levels < Object.keys(impactData[belts].Levels).length; levels++) {
  //     for (
  //       let activities: number = 0;
  //       activities < Object.keys(impactData[belts].Levels[levels].Activities).length;
  //       activities++
  //     ) {

  //     }
  //   }
  // }
}
