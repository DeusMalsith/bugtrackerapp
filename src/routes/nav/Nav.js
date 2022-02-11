import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul className='flex justify-center w-full'>
        <li>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
