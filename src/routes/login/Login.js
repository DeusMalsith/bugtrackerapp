import React from 'react';

const Login = () => {
  return (
    <div className='flex justify-center container mx-auto'>
      <div className='flex flex-col text-center w-72 mt-52 bg-gray-900 rounded'>
        <h1 className='text-2xl mt-4'>Login to your account</h1>
        <form action=''>
          <label className='block py-5'>
            <span className='block pb-1 text-base font-medium text-neutral-200'>
              Username
            </span>
            <input
              className='text-neutral-700 rounded'
              type='text'
              name='username'
              id='username'
            />
          </label>
          <label className='block pb-5'>
            <span className='block pb-1 text-base font-medium text-neutral-200'>
              Password
            </span>
            <input
              className='text-neutral-700 rounded'
              type='password'
              name='password'
              id='password'
            />
          </label>
          <button className='bg-white rounded text-neutral-700 w-16 mb-4' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
