"use client";
import { Popover, UnstyledButton, Text, ScrollArea } from "@mantine/core";
import { IconTool, IconPlanet, IconBug, IconTrophy } from "@tabler/icons-react";

const popoverWidth = 300;
const scrollbarHeight = 75;

function parseNotes(note) {
  console.log(note, "123123123123");
  if (note.note == ("No Notes" || undefined)) {
    return;
  } else {
    const newNote = new Array();
    newNote.push("Note: " + note.note + "\n");
    newNote.push("Focus: " + note.focus_level, "\n");
    return newNote;
  }
}

export function GetBuildIcon({ color, size, activityName, notes }) {
  return (
    <Popover
      width={popoverWidth}
      position="top"
      shadow="md"
      zIndex={12}
    >
      <Popover.Target>
        <UnstyledButton>
          <IconTool
            color={color}
            size={size}
          />
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown>
        <ScrollArea.Autosize
          type="always"
          h={scrollbarHeight}
        >
          <Text size="sm">
            {activityName + "\n"}
            {parseNotes(notes)}
          </Text>
        </ScrollArea.Autosize>
      </Popover.Dropdown>
    </Popover>
  );
}

export function GetExploreIcon({ color, size, activityName, notes }) {
  return (
    <Popover
      width={popoverWidth}
      position="top"
      shadow="md"
    >
      <Popover.Target>
        <UnstyledButton>
          <IconPlanet
            color={color}
            size={size}
          />
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown>
        <ScrollArea h={scrollbarHeight}>
          <Text size="sm">
            {activityName + "\n"}
            {parseNotes(notes)}
          </Text>
        </ScrollArea>
      </Popover.Dropdown>
    </Popover>
  );
}

export function GetSolveIcon({ color, size, activityName, notes }) {
  return (
    <Popover
      width={popoverWidth}
      position="top"
      shadow="md"
    >
      <Popover.Target>
        <UnstyledButton>
          <IconBug
            color={color}
            size={size}
          />
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown>
        <ScrollArea h={scrollbarHeight}>
          <Text size="sm">
            {activityName + "\n"}
            {parseNotes(notes)}
          </Text>
        </ScrollArea>
      </Popover.Dropdown>
    </Popover>
  );
}

export function GetTrophyIcon({ color, size, activityName, notes }) {
  return (
    <Popover
      width={popoverWidth}
      position="top"
      shadow="md"
    >
      <Popover.Target>
        <UnstyledButton>
          <IconTrophy
            color={color}
            size={size}
          />
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown>
        <ScrollArea h={scrollbarHeight}>
          <Text size="sm">
            {activityName + "\n"}
            {parseNotes(notes)}
          </Text>
        </ScrollArea>
      </Popover.Dropdown>
    </Popover>
  );
}

export function GetDiscoveryIcon({ color, size, activityName, notes }) {
  return (
    <Popover
      width={popoverWidth}
      position="top"
      shadow="md"
    >
      <Popover.Target>
        <UnstyledButton>
          <IconTrophy
            color={color}
            size={size}
          />
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown>
        <ScrollArea h={scrollbarHeight}>
          <Text size="sm">
            {activityName + "\n"}
            {parseNotes(notes)}
          </Text>
        </ScrollArea>
      </Popover.Dropdown>
    </Popover>
  );
}
