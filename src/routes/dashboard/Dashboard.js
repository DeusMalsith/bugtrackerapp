import React from 'react';
import { bugList } from '../../helpers/BugList';

const Dashboard = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-slate-600 mt-40 w-6/12 flex flex-col self-center'>
        <h1 className='text-center mb-6 mt-4'>Bug Stats</h1>
        <div className='flex flex-row justify-evenly'>
          <div>
            <h2>Active Bugs</h2>
            <p className='text-center'>
              {bugList.filter((bug) => !bug.completed).length}
            </p>
          </div>
          <div>
            <h2>Completed Bugs</h2>
            <p className='text-center'>
              {bugList.filter((bug) => bug.completed).length}
            </p>
          </div>
        </div>
        <button className='bg-white rounded text-neutral-700 w-28 self-center my-6'>
          Submit Bug
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
