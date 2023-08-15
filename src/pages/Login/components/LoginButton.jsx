import React from 'react';

export default function LoginButton({ text, onClick, className, disabled }) {
  return (
    <div className={className}>
      <button onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
}
