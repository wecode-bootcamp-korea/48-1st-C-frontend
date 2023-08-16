import React from 'react';

const Button = ({ text, onClick, className, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {text}
    </button>
  );
};

export default Button;
