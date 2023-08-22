import { React, useState } from 'react';
import './senseicard.css';
import background from "../../assets/background_img.png";
import { Group, Grid, TextInput, Container, Rating} from '@mantine/core';
import { SenseiLevel } from "../../components"
// import white from "../../assets/white-belt-ninja.png";
import { DatePickerInput } from '@mantine/dates';

// TODO: Make Card look nice

function NoteWriter() {
  const [value, setValue] = useState('');
  return <TextInput placeholder="Any Notes?" label="Notes" withAsterisk value={value} onChange={(event) => setValue(event.currentTarget.value)} />;
}

const SenseiCard = ({ name, sensei }) => {
  return (
    <div>
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

          <Rating fractions={2} defaultValue={0} count={3} color='blue' size='5rem'/>
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
    </div >
  )
}

export default SenseiCard