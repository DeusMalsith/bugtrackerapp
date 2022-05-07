import React from 'react';
import { Link } from 'react-router-dom';
import FetchTest from './components/FetchTest'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to='/dashboard'>DASHBOARD</Link>

      <FetchTest />
    </div>
  );
};

export default Home;
