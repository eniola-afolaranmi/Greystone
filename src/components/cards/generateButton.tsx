import * as btn from "./iconButtons";

export default function GenerateButton(activity, activityIndex, currentActivityID, activityNotes) {
  //The reason activity_name is like this is because that is how the DB columns are named.

  const activityType = activity.substring(0, activity.indexOf(":"));
  let sizeValue = 20;
  let colour: string = "";

  //Checks to see what colour this specific buttons should be. Green is completed (less than currentActivityID).
  //Yellow is current working project.
  //Grey is not reached.
  if (currentActivityID > activity.activity_id) {
    colour = "green";
  } else if (currentActivityID == activity.activity_id) {
    colour = "yellow";
    sizeValue = 25;
  } else {
    colour = "grey";
  }

  switch (activityType) {
    case "Build":
      return (
        <div
          className="buildButtonComp"
          key={activityIndex + activity}
        >
          <btn.GetBuildIcon
            key={activity}
            color={colour}
            size={sizeValue}
            activityName={activity}
            notes={activityNotes}
          />
        </div>
      );

    case "Solve":
      return (
        <div
          className="solveButtonComp"
          key={activityIndex + activity}
        >
          <btn.GetSolveIcon
            key={activity}
            color={colour}
            size={sizeValue}
            activityName={activity}
            notes={activityNotes}
          />
        </div>
      );

    case "Explore":
      return (
        <div
          className="exploreButtonComp"
          key={activityIndex + activity}
        >
          <btn.GetExploreIcon
            key={activity}
            color={colour}
            size={sizeValue}
            activityName={activity}
            notes={activityNotes}
          />
        </div>
      );

    case "Quest":
      return (
        <div
          className="questButtonComp"
          key={activityIndex + activity}
        >
          <btn.GetTrophyIcon
            key={activity}
            color={colour}
            size={sizeValue}
            activityName={activity}
            notes={activityNotes}
          />
        </div>
      );

    case "Discovery":
      return (
        <div
          className="discoveryButtonComp"
          key={activityIndex + activity}
        >
          <btn.GetDiscoveryIcon
            key={activity}
            color={colour}
            size={sizeValue}
            activityName={activity}
            notes={activityNotes}
          />
        </div>
      );

    case "Adventure":
      return (
        <div
          className="adventureButtonComp"
          key={activityIndex + activity}
        >
          <btn.GetTrophyIcon
            key={activity}
            color={colour}
            size={sizeValue}
            activityName={activity}
            notes={activityNotes}
          />
        </div>
      );
  }
}
