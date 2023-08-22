import React from 'react';

import {SenseiCard } from '../containers';
import {NavBar } from '../components';
import './App.css';
const App = () => {
  return (

    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        {/* <Header /> */}
      </div>
      {/* <Brand /> */}
      {/* <WhatCodeNinja />
      <FAQ /> */}
      {/* <CTA /> */}
      {/* <Blog /> */}
      {/* <Footer />
      <SenseiLogin />
      <SenseiCard/> */}

      <SenseiCard />

    </div>

  )
}

export default App