import React from 'react';
import BackButtonContainer from './BackButtonContainer';
import LoginButton from '../Login/components/LoginButton';
import './Join.scss';

export default function JoinDone() {
  return (
    <div className="joinDone">
      <BackButtonContainer />
      <div className="joinSuccessMessage">
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
            stroke-width="2"
            stroke-miterlimit="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="60" cy="60" r="53.5455" stroke="black" stroke-width="2" />
        </svg>
        <div>
          <h1>회원 가입되었습니다!</h1>
          <p>이제 로그인해주세요.</p>
        </div>
      </div>
      <LoginButton text={'확인'} />
    </div>
  );
}
