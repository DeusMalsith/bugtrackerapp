import React from 'react';

const TextInput = ({ label, type, name, id, value, onChange, required }) => {
  return (
    <label className='block py-5'>
      <span className='block pb-1 text-base font-medium text-neutral-200'>
        {label}
      </span>
      <input
        className='text-neutral-700 rounded'
        type={type}
        name={name}
        id={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default TextInput;
