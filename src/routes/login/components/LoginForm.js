import React, { useState } from 'react';
import TextInput from '../../../common/TextInput';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password)
  };

  return (
    <form action=''>
      <TextInput
        label='E-Mail'
        type='email'
        name='email'
        id='email'
        required={true}
        value={email}
        onChange={setEmail}
      />
      <TextInput
        label='Password'
        type='password'
        name='password'
        id='password'
        required={true}
        value={password}
        onChange={setPassword}
      />
      <button
        onClick={onSubmit}
        className='bg-white rounded text-neutral-700 w-16 mb-4'
        type='submit'
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
