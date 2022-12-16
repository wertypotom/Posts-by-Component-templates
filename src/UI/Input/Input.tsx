import React from 'react';
import './Input.css';

interface InputProps {
  value: string;
  placeholder: string;
  type?: 'text' | 'password';
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const Input = ({ type = 'text', ...rest }: InputProps) => {
  return <input type={type} className='input' {...rest} />;
};

export default Input;
