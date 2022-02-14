import React from 'react';
import Nav from '../routes/nav/Nav.js';
import Footer from '../routes/footer/Footer.js';

const Layout = ({ children }) => {
  return (
    <div className='relative'>
      <Nav />
      <main className='bg-gray-700 text-neutral-200 h-screen'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
