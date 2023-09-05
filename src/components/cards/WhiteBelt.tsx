import { Flex, Group, Space, Center, Button } from "@mantine/core";
import * as iconButtons from "./iconButtons";

function generateActivityButton(activity: any, level: any, le_note: any) {
  const name = activity.activity_name;
  const size_value = 20;
  const activity_type = name.substring(0, name.indexOf(":"));
  const note: string = le_note != undefined ? le_note.note : "No Notes";
  console.log("generate", note);
  switch (activity_type) {
    case "Build":
      return (
        <Flex key={name + level}>
          <iconButtons.GetBuildIcon
            key={name}
            color="red"
            size={size_value}
            status="w"
            note={note}
          />
        </Flex>
      );
    case "Explore":
      return (
        <Flex key={name + level}>
          <iconButtons.GetExploreIcon
            key={name}
            color="red"
            size={size_value}
            status="w"
            note={note}
          />
        </Flex>
      );
    case "Solve":
      return (
        <Flex key={name + level}>
          <iconButtons.GetSolveIcon
            key={name}
            color="red"
            size={size_value}
            status="w"
            note={note}
          />
        </Flex>
      );
    case "Quest":
      return (
        <Flex key={name + level}>
          <iconButtons.GetAdventureIcon
            key={name}
            color="red"
            size={size_value}
            status="w"
            note={note}
          />
        </Flex>
      );
    case "Adventure":
      return (
        <Flex key={name + level}>
          <iconButtons.GetAdventureIcon
            key={name}
            color="red"
            size={size_value}
            status="w"
            note={note}
          />
        </Flex>
      );
  }
}

export function WhiteBeltCard({ name, all_levels }: any) {
  //Loop over each level inside activities param
  let parsed_levels: any[] = [];
  let count = 0;
  console.log(all_levels);
  for (let i = 0; i < Object.keys(all_levels).length; i++) {
    let current_level = all_levels[i].Activities;
    parsed_levels.push([]);
    //Loop over each activity inside a level.
    //Creates a react component for each activity. The components are buttons with the associated activity name, note and status.
    //Each activity newly generated button is then placed into it's levels nested array.
    for (let x = 0; x < Object.keys(current_level).length; x++) {
      parsed_levels[i].push(generateActivityButton(current_level[x], all_levels.indexOf(x), current_level[x].Notes[0]));
      count++;
    }
  }
  console.log("Parsed levels", parsed_levels);
  return (
    <Flex
      justify={"flex-start"}
      align={"flex-start"}
      direction={"row"}
      wrap={"wrap"}
      gap={"md"}
    >
      <Flex>Cyka Blyat</Flex>
    </Flex>
  );
}
