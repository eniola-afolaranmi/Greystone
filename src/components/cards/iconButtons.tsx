"use client";
import { Popover, UnstyledButton, Text, ScrollArea } from "@mantine/core";
import { IconTool, IconPlanet, IconBug, IconTrophy } from "@tabler/icons-react";

const popoverWidth = 300;
const scrollbarHeight = 75;

function parseNotes(notes: any) {
  if (notes == ("No Notes" || undefined)) {
    return;
  }
  const newNotes = new Array();
  for (let item = 0; item < notes.length; item++) {
    newNotes.push("Note: " + notes[item].note + "\n");
  }
  return newNotes;
}

export function GetBuildIcon({ color, size, activityName, notes }: any) {
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

export function GetExploreIcon({ color, size, activityName, notes }: any) {
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
            {notes}
          </Text>
        </ScrollArea>
      </Popover.Dropdown>
    </Popover>
  );
}

export function GetSolveIcon({ color, size, activityName, notes }: any) {
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
            {notes}
          </Text>
        </ScrollArea>
      </Popover.Dropdown>
    </Popover>
  );
}

export function GetTrophyIcon({ color, size, activityName, notes }: any) {
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
            {notes}
          </Text>
        </ScrollArea>
      </Popover.Dropdown>
    </Popover>
  );
}

export function GetDiscoveryIcon({ color, size, activityName, notes }: any) {
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
            {notes}
          </Text>
        </ScrollArea>
      </Popover.Dropdown>
    </Popover>
  );
}
