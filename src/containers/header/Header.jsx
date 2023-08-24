import React from 'react';
import './header.css';
import people from "assets/people.png";
import ninja from "assets/NinjaHero2.gif";


const Header = () => {
  return (
    <div className='cn__header section__padding' id='home'>
      <div className='cn__header-content'>
        <h1>Welcome to Progress Tracking</h1>
        <p>See your child's progress in Impact</p>
        <div className='cn__header-content__input'>
          <input type='childName' placeholder='first name.lastname'></input>
          <button type='button'>Get started</button>

        </div>

        <div className='cn__header-content__people'>
          <img src={people} alt='people' />
          <p>20 ninjas checking their progress!</p>
        </div>
      </div>
      <div className='cn__header-image'>
        <img src={ninja} alt='ninja' />
      </div>
    </div>
  )
}

export default Header