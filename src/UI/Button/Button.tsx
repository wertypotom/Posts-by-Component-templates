import React from 'react';
import './Button.css';

interface ButtonProps {}

const Button: React.FC<ButtonProps> = ({}) => {
  return <div className='button'>Button component</div>;
};

export default Button;
