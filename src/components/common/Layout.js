import React from 'react';
import Nav from '../nav/Nav.js';
import Footer from '../footer/Footer.js';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
