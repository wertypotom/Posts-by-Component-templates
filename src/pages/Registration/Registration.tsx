import React from 'react';
import Button from '../../UI/Button/Button';
import './Registration.css';

const Registration = () => {
  return (
    <form className='regitration__page'>
      <input type='text' placeholder='enter nickname' />
      <input type='password' placeholder='enter password' />
      <Button>Register</Button>
    </form>
  );
};

export default Registration;
