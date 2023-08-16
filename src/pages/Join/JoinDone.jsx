import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButtonContainer from './BackButtonContainer';
import Button from '../../components/Button';
import './Join.scss';
import './JoinDone.scss';

export default function JoinDone() {
  const navigate = useNavigate();

  return (
    <div className="joinDone">
      <BackButtonContainer />
      <div className="joinSuccessContainer">
        <svg
          className="checkMarkSvg"
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
        >
          <path
            d="M46.3636 58.0165L58.2645 69.9173L79.0909 49.0909"
            stroke="black"
            strokeWidth="2"
            strokeMiterlimit="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="60" cy="60" r="53.5455" stroke="black" strokeWidth="2" />
        </svg>
        <div className="joinSuccessMessage">
          <h1>회원 가입되었습니다!</h1>
          <p>이제 로그인해주세요.</p>
        </div>
      </div>
      <Button
        text="확인"
        onClick={() => navigate('/login')}
        className="loginButton"
      />
    </div>
  );
}
