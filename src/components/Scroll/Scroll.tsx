import React from 'react';
import './Scroll.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollProps {}

const Scroll = ({}: ScrollProps) => {
  return <div className='scroll'>Scroll</div>;
};

export default Scroll;

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
