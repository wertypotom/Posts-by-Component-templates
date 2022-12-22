import React from 'react';
import './Navbar.css';
import { NavLink, Outlet } from 'react-router-dom';
import Button from '../Button/Button';

interface NavbarProps {}

type ActiveLinkProps = {
  isActive: boolean;
};

const getActiveLink = ({ isActive }: ActiveLinkProps) => {
  return isActive ? 'link-active' : 'link';
};

const Navbar = ({}: NavbarProps) => {
  return (
    <>
      <header>
        <nav className='navbar'>
          <NavLink to='/' className={getActiveLink}>
            Login
          </NavLink>

          <NavLink to='/posts' className={getActiveLink}>
            Posts
          </NavLink>
          <NavLink to='/about' className={getActiveLink}>
            About
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
