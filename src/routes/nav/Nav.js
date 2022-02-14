import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='sticky top-0 w-full'>
      <nav className='bg-gray-900'>
        <ul className='flex justify-center w-full h-16 items-center text-neutral-200'>
          <li className='w-fit ml-4 mr-auto text-base md:text-3xl align-middle'>
            <Link to='/'>Bug Tracker App</Link>
          </li>
          <li className='w-16 mx-4 align-middle'>
            <Link to='/login'>Login</Link>
          </li>
          <li className='w-16 mx-4 align-middle'>
            <Link to='/register'>Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
