import React from 'react';
import Nav from '../routes/nav/Nav.js';
import Footer from '../routes/footer/Footer.js';

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
