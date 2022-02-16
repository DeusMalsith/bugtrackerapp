import React from 'react';
import RegisterForm from './components/RegisterForm';

const Register = () => {
  return (
    <div className='flex justify-center container mx-auto'>
      <div className='flex flex-col text-center w-72 mt-52 bg-gray-900 rounded'>
        <h1 className='text-2xl mt-4'>Create an account</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
