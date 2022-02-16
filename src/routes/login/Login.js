import React from 'react';
import LoginForm from './components/LoginForm';

const Login = () => {
  return (
    <div className='flex justify-center container mx-auto'>
      <div className='flex flex-col text-center w-72 mt-52 bg-gray-900 rounded'>
        <h1 className='text-2xl mt-4'>Login to your account</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
