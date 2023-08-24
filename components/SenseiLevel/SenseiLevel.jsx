import { Box, Divider, Group, Rating, Popover, useMantineTheme, rem} from '@mantine/core';
import { IconTrophy, IconTool, IconWorld } from '@tabler/icons-react';
import {React} from 'react';
import './senseilevel.css';

// TODO: Figure out how Tabler Switch Icon works
function ToolStatus() {

  const getEmptyIcon = (value) => {
    const defaultProps = { size: rem(24), color: 'gray' };
    switch (value) {
      case 1:
        return <IconTool {...defaultProps} />;
      case 2:
        return <IconTool {...defaultProps} />;
      case 3:
        return <IconTool {...defaultProps} />;
      default:
        return <IconTool {...defaultProps} />;
    }
  };

  const GetFullIcon = (value) => {
    const defaultProps = { size: rem(24) };
    const theme = useMantineTheme();

    switch (value) {
      case 1:
        return <IconTool {...defaultProps} color={theme.colors.red[7]} />;
      case 2:
        return <IconTool {...defaultProps} color={theme.colors.blue[7]} />;
      case 3:
        return <IconTool {...defaultProps} color={theme.colors.green[7]} />;
      default:
        return <IconTool {...defaultProps} />;
    }
  };

  return (
    <Rating emptySymbol={getEmptyIcon} fullSymbol={GetFullIcon} highlightSelectedOnly count={3} size='4rem'/>
  );
}

function TrophyStatus() {

  const getEmptyIcon = (value) => {
    const defaultProps = { size: rem(24), color: 'gray' };
    switch (value) {
      case 1:
        return <IconTrophy {...defaultProps} />;
      case 2:
        return <IconTrophy {...defaultProps} />;
      case 3:
        return <IconTrophy {...defaultProps} />;
      default:
        return <IconTrophy {...defaultProps} />;
    }
  };

  const GetFullIcon = (value) => {
    const defaultProps = { size: rem(24) };
    const theme = useMantineTheme();

    switch (value) {
      case 1:
        return <IconTrophy {...defaultProps} color={theme.colors.red[7]} />;
      case 2:
        return <IconTrophy {...defaultProps} color={theme.colors.blue[7]} />;
      case 3:
        return <IconTrophy {...defaultProps} color={theme.colors.green[7]} />;
      default:
        return <IconTrophy {...defaultProps} />;
    }
  };

  return (
    <Rating emptySymbol={getEmptyIcon} fullSymbol={GetFullIcon} highlightSelectedOnly count={3} size='4rem'/>
  );
}

function WorldStatus() {

  const getEmptyIcon = (value) => {
    const defaultProps = { size: rem(24), color: 'gray' };
    switch (value) {
      case 1:
        return <IconWorld {...defaultProps} />;
      case 2:
        return <IconWorld {...defaultProps} />;
      case 3:
        return <IconWorld {...defaultProps} />;
      default:
        return <IconWorld {...defaultProps} />;
    }
  };

  const GetFullIcon = (value) => {
    const defaultProps = { size: rem(24) };
    const theme = useMantineTheme();

    switch (value) {
      case 1:
        return <IconWorld {...defaultProps} color={theme.colors.red[7]} />;
      case 2:
        return <IconWorld {...defaultProps} color={theme.colors.blue[7]} />;
      case 3:
        return <IconWorld {...defaultProps} color={theme.colors.green[7]} />;
      default:
        return <IconWorld {...defaultProps} />;
    }
  };

  return (
    <Rating emptySymbol={getEmptyIcon} fullSymbol={GetFullIcon} highlightSelectedOnly count={3} size='4rem'/>
  );
}

const ToolDropDown = () => (
  <>
    <Popover.Dropdown>
      {ToolStatus()}
    </Popover.Dropdown>
  </>
)

const TrophyDropDown = () => (
  <>
    <Popover.Dropdown>
      {TrophyStatus()}
    </Popover.Dropdown>
  </>
)

const WorldDropDown = () => (
  <>
    <Popover.Dropdown>
      {WorldStatus()}
    </Popover.Dropdown>
  </>
)

const Level = () => {
  return (
    <div className='cn__levelbar'>
      <Box sx={(theme) => ({
        display: 'flex',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.blue[1] : theme.colors.blue[3],
        textAlign: 'center',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        width: '33rem',
        alignItems: 'center',

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },
      })}>
        <Group sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',

        })}>
          <Popover position="bottom" withArrow shadow="md">
            <Popover.Target>
            <button><IconTool color='white' size={30} /> </button>
            </Popover.Target>
            <ToolDropDown />
          </Popover>
          <Divider size='lg' orientation="vertical" />
          <Popover position="bottom" withArrow shadow="md">
            <Popover.Target>
              <button><IconTool color='white' size={30} /> </button>
            </Popover.Target>
            <ToolDropDown />
          </Popover>
          <Divider size="lg" orientation="vertical" />
          <Popover position="bottom" withArrow shadow="md">
            <Popover.Target>
              <button><IconTrophy color='white' size={30} /> </button>
            </Popover.Target>
            <TrophyDropDown />
          </Popover>
          <Divider size="lg" orientation="vertical" />
          <Popover position="bottom" withArrow shadow="md">
            <Popover.Target>
              <button><IconWorld color='white' size={30} /> </button>
            </Popover.Target>
            <WorldDropDown />
          </Popover>
          <Divider size="lg" orientation="vertical" />
          <Popover position="bottom" withArrow shadow="md">
            <Popover.Target>
              <button><IconTrophy color='white' size={30} /> </button>
            </Popover.Target>
            <TrophyDropDown />
          </Popover>


        </Group>
      </Box>
    </div>
  )
}

export default Level