import styles from "../../../styles/card.css"
import { React, useState } from 'react';
import background from "../../assets/background_img.png";
import { Group, Grid, TextInput, Container, Rating} from '@mantine/core';
import { SenseiLevel } from "../../components";
import { DatePickerInput } from '@mantine/dates';


function NoteWriter() {
    const [value, setValue] = useState('');
    return <TextInput placeholder="Any Notes?" label="Notes" withAsterisk value={value} onChange={(event) => setValue(event.currentTarget.value)} />;
}


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
      
            <div className='cn__sensei-card-header'>
                <Group>
                    <img src={background} alt='background' />
                    {/* <img src={white} /> */}
                </Group>
                <div className='cn__sensei-card-header_input'>

                    <h1>Ninja: {name}</h1>
                    <h1>Sensei: {sensei} </h1>
                    <Group spacing={0}>
                        <h1>Date: </h1>
                        <DatePickerInput clearable defaultValue={new Date()} label="Enter today's date" radius='lg' size='lg' placeholder="Pick date" mx="auto" maw={400} />
                    </Group>
                </div>
                <div className='cn__sensei-card-header_focus'>
                    {/* <button className="switch-icon switch-icon-scale" data-bs-toggle="switch-icon">
            <span className="switch-icon-a text-muted">
              <IconStar />
            </span>
            <span className="switch-icon-b text-blue">
              <IconStarFilled />
            </span>
          </button>
          <button className="switch-icon switch-icon-scale" data-bs-toggle="switch-icon">
            <span className="switch-icon-a text-muted">
              <IconStar />
            </span>
            <span className="switch-icon-b text-blue">
              <IconStarFilled />
            </span>
          </button>
          <button className="switch-icon switch-icon-scale" data-bs-toggle="switch-icon">
            <span className="switch-icon-a text-muted">
              <IconStar />
            </span>
            <span className="switch-icon-b text-blue">
              <IconStarFilled />
            </span>
          </button> */}

                    <Rating fractions={2} defaultValue={0} count={3} color='blue' size='5rem' />
                </div>
            </div>
            <div className='cn__sensei-card-level'>
                <Grid sx={(theme) => ({
                    justifyContent: 'center',
                    alignItems: 'center'
                })}>
                    <Grid.Col span={6}> <SenseiLevel /></Grid.Col>
                    <Grid.Col span={6}> <SenseiLevel /></Grid.Col>
                    <Grid.Col span={6}> <SenseiLevel /></Grid.Col>
                    <Grid.Col span={6}> <SenseiLevel /></Grid.Col>
                    <Grid.Col span={6}> <SenseiLevel /></Grid.Col>
                    <Grid.Col span={6}> <SenseiLevel /></Grid.Col>
                    <Grid.Col span={6}> <SenseiLevel /></Grid.Col>
                    <Grid.Col span={6}> <SenseiLevel /></Grid.Col>
                </Grid >
            </div>
            <div className='cn__sensei-card-note'>
                <Container size='md'>
                    {/* <TextInput placeholder="Any Notes?" label="Notes" withAsterisk size="xl" /> */}
                    {NoteWriter()}
                </Container>
                {/* <Button>Enter</Button> */}
            </div>
        </main >
    )
}
