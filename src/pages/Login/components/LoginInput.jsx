import React, { useState } from 'react';

export default function LoginInput({
  placeholder,
  name,
  value,
  onChange,
  type,
}) {
  return (
    <div className="loginInput">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
