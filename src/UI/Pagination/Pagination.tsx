import React from 'react';
import Button from '../Button/Button';
import './Pagination.css';

interface PaginationProps {
  currentPage: number;
  pages: number[];
  onPageChange: (i: number) => void;
}

const Pagination = React.memo(
  ({ currentPage, pages, onPageChange }: PaginationProps) => {
    console.log('pages ', pages);
    return (
      <div className='pagination'>
        {pages.map((i) => (
          <Button key={i} onClick={() => onPageChange(i)}>
            <span className={currentPage === i ? 'page-active' : ''}>{i}</span>
          </Button>
        ))}
      </div>
    );
  }
);

export default Pagination;
