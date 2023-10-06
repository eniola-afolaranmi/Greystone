import * as btn from "./iconButtons";

export default function GenerateButton(activity: any, activityIndex: number, currentActivityID: number, activityNotes: any) {
  //The reason activity_name is like this is because that is how the DB columns are named.
  console.log();
  const activityName = activity.activity_name;
  const activityType = activityName.substring(0, activityName.indexOf(":"));
  const notes = activityNotes != 0 ? activityNotes : "No Notes";
  let sizeValue = 20;
  let colour: string = "";

  //Checks to see what colour this specific buttons should be. Green is completed (less than currentActivityID).
  //Yellow is current working project.
  //White is not reached.
  if (currentActivityID > activity.activity_id) {
    colour = "green";
  } else if (currentActivityID == activity.activity_id) {
    colour = "yellow";
    sizeValue = 25;
  } else {
    colour = "white";
  }

  switch (activityType) {
    case "Build":
      return (
        <div
          className="buildButtonComp"
          key={activityIndex + activityName}
        >
          <btn.GetBuildIcon
            key={activityName}
            color={colour}
            size={sizeValue}
            activityName={activityName}
            notes={notes}
          />
        </div>
      );

    case "Solve":
      return (
        <div
          className="solveButtonComp"
          key={activityIndex + activityName}
        >
          <btn.GetSolveIcon
            key={activityName}
            color={colour}
            size={sizeValue}
            activityName={activityName}
            notes={notes}
          />
        </div>
      );

    case "Explore":
      return (
        <div
          className="exploreButtonComp"
          key={activityIndex + activityName}
        >
          <btn.GetExploreIcon
            key={activityName}
            color={colour}
            size={sizeValue}
            activityName={activityName}
            notes={notes}
          />
        </div>
      );

    case "Quest":
      return (
        <div
          className="questButtonComp"
          key={activityIndex + activityName}
        >
          <btn.GetTrophyIcon
            key={activityName}
            color={colour}
            size={sizeValue}
            activityName={activityName}
            notes={notes}
          />
        </div>
      );

    case "Discovery":
      return (
        <div
          className="discoveryButtonComp"
          key={activityIndex + activityName}
        >
          <btn.GetDiscoveryIcon
            key={activityName}
            color={colour}
            size={sizeValue}
            activityName={activityName}
            notes={notes}
          />
        </div>
      );

    case "Adventure":
      return (
        <div
          className="adventureButtonComp"
          key={activityIndex + activityName}
        >
          <btn.GetTrophyIcon
            key={activityName}
            color={colour}
            size={sizeValue}
            activityName={activityName}
            notes={notes}
          />
        </div>
      );
  }
}
