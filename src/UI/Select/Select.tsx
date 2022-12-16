import React from 'react';
import { ISelectOption } from '../../interfaces/Sort';
import './Select.css';

interface SelectProps {
  value: string;
  sortPosts: (e: string) => void;
  options: ISelectOption[];
  devaultValue: string;
}

const Select = ({ value, sortPosts, options, devaultValue }: SelectProps) => {
  return (
    <div className='select'>
      <select value={value} onChange={(e) => sortPosts(e.target.value)}>
        <option disabled>{devaultValue}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
