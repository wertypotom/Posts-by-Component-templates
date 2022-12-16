import React from 'react';
import './Button.css';

interface ButtonProps {
  onClick?(): void;
  type?: 'button' | 'submit';
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ children, type = 'button', ...rest }: ButtonProps) => {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
