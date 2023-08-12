import React from 'react';

export default function LoginInput({ placeholder }) {
  return (
    <div className="loginInput">
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
