import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackButtonContainer() {
  const navigate = useNavigate();

  return (
    <div className="backButtonContainer">
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M22.5 10L12.5 20L22.5 30"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        뒤로
      </button>
    </div>
  );
}
