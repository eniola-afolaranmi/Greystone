import { Popover, UnstyledButton, Text } from "@mantine/core";
import { IconTool, IconPlanet, IconBug, IconTrophy } from "@tabler/icons-react";

const popover_width = 250;

export function GetBuildIcon({ color, size, status, note }: any) {
  return (
    <Popover
      width={popover_width}
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
        <Text size="sm">{note}</Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export function GetExploreIcon({ color, size, status, note }: any) {
  return (
    <Popover
      width={popover_width}
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
        <Text size="sm">{note}</Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export function GetSolveIcon({ color, size, status, note }: any) {
  return (
    <Popover
      width={popover_width}
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
        <Text size="sm">{note}</Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export function GetAdventureIcon({ color, size, status, note }: any) {
  return (
    <Popover
      width={popover_width}
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
        <Text size="sm">{note}</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
