import React, { useState } from 'react';
import './navbar.css';
// import logo from '../../assets/logo.png';
import { Button, Tabs } from '@mantine/core';
import { IconHome, IconStar, IconPhone, IconQuestionMark } from '@tabler/icons-react';
import { Header, WhatCodeNinja, FAQ, SenseiLogin } from '../../containers';

{/* <div className='cn__navbar-links'>
        {/* <div className='cn__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div> */}
      //   <div className='cn__navbar-links_container'>
      //     <Menu />
      //   </div>
      // </div>
      // <div className='cn__navbar-sign'>
      //   <button type="button"> I'm a Sensei </button>
      // </div>
      // <div className='cn__navbar-menu'>
      //   {toggleMenu
      //     ? <RiCloseLine color='#ffff' size={27} onClick={() => setToggleMenu(false)} />
      //     : <RiMenu3Line color='#ffff' size={27} onClick={() => setToggleMenu(true)} />
      //   }
      //   {toggleMenu && (
      //     <div className='cn__navber-menu_container scale-up-center'>
      //       <div className='cn__navbar-menu_container-links'>
      //         <Menu />
      //         <div className='cn__navbar-menu_container-links-sign'>
      //           <button type="button"> I'm a Sensei </button>
      //         </div>
      //       </div>
      //     </div>
      //   )}
      // </div> */}

/*TODO: Fix Navbar */

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='cn__navbar'>
      <Tabs variant="pills" defaultValue="Home">
      <Tabs.List grow position="center">
        <Tabs.Tab value="Home" icon={<IconHome size="0.8rem" />}>Home</Tabs.Tab>
        <Tabs.Tab value="wImpact?" icon={<IconStar size="0.8rem" />}>What is Impact?</Tabs.Tab>
        <Tabs.Tab value="Contact Info" icon={<IconPhone size="0.8rem" />}>Contact Info</Tabs.Tab>
        <Tabs.Tab value="faq" icon={<IconQuestionMark size="0.8rem" />}>FAQ</Tabs.Tab>
        <Tabs.Tab value='sensei' ml="auto"><Button>I'm a Sensei</Button></Tabs.Tab>.
      </Tabs.List>

      <Tabs.Panel value="Home" pt="xl">
        <Header />
      </Tabs.Panel>

      <Tabs.Panel value="wImpact?" pt="xl">
        <WhatCodeNinja />
      </Tabs.Panel>

      <Tabs.Panel value="faq" pt="xl">
        <FAQ />
      </Tabs.Panel>

      <Tabs.Panel value="sensei" pt="xl">
        <SenseiLogin />
      </Tabs.Panel>
    </Tabs>
    </div>
  )
}

export default Navbar