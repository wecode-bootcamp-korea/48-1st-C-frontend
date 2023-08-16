import React from 'react';

const Input = ({ placeholder, name, value, onChange, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
