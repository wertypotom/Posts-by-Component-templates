import React from 'react';
import Button from '../Button/Button';
import './Pagination.css';

interface PaginationProps {
  currentPage: number;
  pages: number[];
  onPageChange: (i: number) => void;
}

const Pagination = ({ currentPage, pages, onPageChange }: PaginationProps) => {
  return (
    <div className='pagination'>
      {pages.map((i) => (
        <Button key={i} onClick={() => onPageChange(i)}>
          <span className={currentPage === i ? 'page-active' : ''}>{i}</span>
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
