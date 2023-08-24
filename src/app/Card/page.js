import styles from "/styles/card.css"
import React, {useState} from 'react';
import background from "/assets/background_img.png";
import { Group, Rating, Grid, Box, Space} from '@mantine/core';
import { Level } from "./Level/level.jsx";
import blueBackground from "/assets/cn-blue.svg";


export default function Card({ name, sensei, date, note }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Home{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            What's Impact?{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            I'm a Sensei{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn more{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>
      <div className='cn__card-header'>
        <Group>
          <div className='cn__card-header-topBackground'>
            <img src={blueBackground} alt='blue background' />
          </div>
          {/* <img src={white} /> */}
        </Group>
        <div className='cn__card-header_input'>
          <img src={background} alt='background' />
          <Grid justify="space-between" align="flex-start" grow>
          <Grid.Col span={4}> <Box sx={(theme) => ({
        display: 'flex',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.blue[1] : theme.colors.blue[3],
        textAlign: 'center',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        width: '20rem',
        alignItems: 'center',

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },
      })}><h1>Ninja: {name}</h1></Box></Grid.Col>
          <Grid.Col span={4} offset={2} ><h1>Sensei: {sensei}</h1></Grid.Col>
          <Grid.Col span={4}><h1>Date: {new Date().toLocaleDateString() + ""} </h1></Grid.Col>
          <Grid.Col span={4}> <Rating value={2.5} fractions={2} count={3} readOnly size='5rem' color='blue' /> </Grid.Col>
          </Grid>
        </div>
        {/* <div className='cn__card-header_focus'>
          
        </div> */}
      </div>
      <div className='cn__card-level'>
        <Space h="5rem"/>
        <Grid grow sx={(theme) => ({
          justifyContent: 'center',
          alignItems: 'center',
        })}>
          <Grid.Col span={6}> <Level /></Grid.Col>
          <Grid.Col span={6}> <Level /></Grid.Col>
          <Grid.Col span={6}> <Level /></Grid.Col>
          <Grid.Col span={6}> <Level /></Grid.Col>
          <Grid.Col span={6}> <Level /></Grid.Col>
          <Grid.Col span={6}> <Level /></Grid.Col>
          <Grid.Col span={6}> <Level /></Grid.Col>
          <Grid.Col span={6}> <Level /></Grid.Col>
        </Grid >
      </div>
      <div className='cn__card-note'>
        <Space h="5rem"/>
        <h1>Notes: {note}</h1>
      </div>
    </main >
  )
}
