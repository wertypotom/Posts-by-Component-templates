import React from 'react';
import './Select.css';

interface SelectOption {
  value: string;
  title: string;
}

interface SelectProps {
  value: string;
  sortPosts: (e: string) => void;
  options: SelectOption[];
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
