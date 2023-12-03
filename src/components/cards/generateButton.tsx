import * as btn from "./iconButtons";

export default function GenerateButton(activity, currentActivityID: number) {
  //The reason activity_name is like this is because that is how the DB columns are named.

  let sizeValue = 20;
  let colour: string = "";
  const id = activity.id;
  const notes = activity.notes;
  const name = activity.activity_name;
  const type = name.substring(0, name.indexOf(":"));

  //Checks to see what colour this specific buttons should be. Green is completed (less than currentActivityID).
  //Yellow is current working project.
  //Grey is not reached.
  if (currentActivityID > activity.id) {
    colour = "green";
  } else if (currentActivityID == activity.id) {
    colour = "yellow";
    sizeValue = 25;
  } else {
    colour = "grey";
  }

  switch (type) {
    case "Build":
      return (
        <div
          className="buildButtonComp"
          key={id + name}
        >
          <btn.GetBuildIcon
            key={activity}
            color={colour}
            size={sizeValue}
            activityName={name}
            notes={notes}
          />
        </div>
      );

    case "Solve":
      return (
        <div
          className="solveButtonComp"
          key={id + name}
        >
          <btn.GetSolveIcon
            key={activity}
            color={colour}
            size={sizeValue}
            activityName={name}
            notes={notes}
          />
        </div>
      );

    case "Explore":
      return (
        <div
          className="exploreButtonComp"
          key={id + name}
        >
          <btn.GetExploreIcon
            key={activity}
            color={colour}
            size={sizeValue}
            activityName={name}
            notes={notes}
          />
        </div>
      );

    case "Quest":
      return (
        <div
          className="questButtonComp"
          key={id + name}
        >
          <btn.GetTrophyIcon
            key={activity}
            color={colour}
            size={sizeValue}
            activityName={name}
            notes={notes}
          />
        </div>
      );

    case "Discovery":
      return (
        <div
          className="discoveryButtonComp"
          key={id + name}
        >
          <btn.GetDiscoveryIcon
            key={activity}
            color={colour}
            size={sizeValue}
            activityName={name}
            notes={notes}
          />
        </div>
      );

    case "Adventure":
      return (
        <div
          className="adventureButtonComp"
          key={id + name}
        >
          <btn.GetTrophyIcon
            key={activity}
            color={colour}
            size={sizeValue}
            activityName={name}
            notes={notes}
          />
        </div>
      );
  }
}
