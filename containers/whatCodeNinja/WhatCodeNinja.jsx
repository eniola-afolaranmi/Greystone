import React from 'react';
import './whatcodeninja.css';
import { Feature } from '../../components';

const WhatCodeNinja = () => {
  return (
    <div className='cn__whatcn section__margin' id='wImpact'>
      <div className='cn__whatcn-feature'>
        <Feature title="What is Impact?" text="Introducing IMPACT, our new education platform designed to teach coding and computer science skills to children in a fun and interactive way. We use powerful learning algorithms to assess each child's needs and create a unique learning path tailored to their interests. We've partnered with Microsoft MakeCode to provide top-quality resources to students, empowering them with the skills they need to succeed in the digital age. Our goal is to help the next generation of young coders and provide them with the skills necessary to thrive."/>
      </div>
      <div className='cn__whatcn-heading'>
        <h1 className='gradient__text'>
          Welcome to Impact
        </h1>
        <p> Learn More</p>
      </div>
      <div className='cn__whatcn-container'>
        <Feature title="Levels" text="Each belt is now made up of various levels. Ninjas will level up"/>
        <Feature title="Refresh" text="As Impact is a completely new curriculum, all ninjas in Orange Belt and under are restarting with the new curriculum"/>
        <Feature title="Prove Yourself" text="If there is knowledge in place beforehand, ninjas can prove themselves and skip through activities in levels"/>
      </div>
    </div>
  )
}

export default WhatCodeNinja