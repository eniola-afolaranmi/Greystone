"use client";
import { Flex, Group, Space, Center, Button } from "@mantine/core";
import * as iconButtons from "./iconButtons";

export default function generateActivityButton(activity, level, le_note) {
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
