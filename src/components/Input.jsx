import React from 'react';

const Input = ({ placeholder, name, value, onChange, type, className }) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
