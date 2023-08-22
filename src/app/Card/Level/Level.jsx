import { Box, Divider, Group, Popover } from '@mantine/core';
import { IconTrophy, IconTool, IconWorld } from '@tabler/icons-react';
import React from 'react';
import './level.css';

const DropDown = () => (
  <>
    <Popover.Dropdown>
      <p>Date Started: </p>
      <p>Date Completed: </p>
      <p>Time Spent: </p>
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
          <Popover width={200} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <button><IconTool color='white' size={30} /> </button>
            </Popover.Target>
            <DropDown />
          </Popover>
          <Divider size='lg' orientation="vertical" />
          <Popover width={200} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <button><IconTool color='white' size={30} /> </button>
            </Popover.Target>
            <DropDown />
          </Popover>
          <Divider size="lg" orientation="vertical" />
          <Popover width={200} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <button><IconTrophy color='white' size={30} /> </button>
            </Popover.Target>
            <DropDown />
          </Popover>
          <Divider size="lg" orientation="vertical" />
          <Popover width={200} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <button><IconWorld color='white' size={30} /> </button>
            </Popover.Target>
            <DropDown />
          </Popover>
          <Divider size="lg" orientation="vertical" />
          <Popover width={200} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <button><IconTrophy color='white' size={30} /> </button>
            </Popover.Target>
            <DropDown />
          </Popover>


        </Group>
      </Box>
    </div>
  )
}

export default Level