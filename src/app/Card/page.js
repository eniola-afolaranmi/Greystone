import styles from "../../../styles/card.css"
import React from 'react';
import background from "../../assets/background_img.png";
import { Group, Rating, Grid, Box, Space} from '@mantine/core';
import { Level } from "../../components"
import blueBackground from "../../assets/cn-blue.svg";

export default function Card({ name, sensei, date, note }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
