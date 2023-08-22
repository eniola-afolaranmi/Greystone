import React from 'react';
import './senseilogin.css';
import { PasswordInput, TextInput } from '@mantine/core';

const Possibility = () => {
  return (
    <div className='cn__sensei-login section-margin'>
      <div className='cn__sensei-login_input'>
        <div className='cn__sensei-login_email'>
          <TextInput
            placeholder="Your email address"
            label=<h1>Enter your email</h1>
            radius="xl"
            size="xl"
            withAsterisk
          />
        </div>
        <div className='cn__sensei-login_password'>
          <PasswordInput
            placeholder="Password"
            label=<h1>Enter your Password</h1>
            description="Password must include at least one letter, number and special character"
            radius="xl"
            size="xl"
            withAsterisk
          />
        </div>
      </div>
    </div>
  )
}

export default Possibility