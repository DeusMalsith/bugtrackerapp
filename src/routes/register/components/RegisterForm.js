import React, { useState } from 'react';
import TextInput from '../../../common/TextInput';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, username, password);
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
        label='Username'
        type='username'
        name='username'
        id='username'
        required={true}
        value={username}
        onChange={setUsername}
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
        className='bg-white rounded text-neutral-700 w-32 mb-4'
        type='submit'
      >
        Create Account
      </button>
    </form>
  );
};

export default RegisterForm;
