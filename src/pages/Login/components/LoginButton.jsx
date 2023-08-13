import React from 'react';

export default function LoginButton({ text, onClick }) {
  return (
    <div className="loginButton">
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
