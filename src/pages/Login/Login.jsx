import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from './components/LoginInput';
import LoginButton from './components/LoginButton';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="logingLogo">
        <img src="/images/Logo.png" alt="Weread" />
        <img src="/images/logo_wecode.png" alt="WECODE" />
      </div>
      <div className="loginForm">
        <LoginInput placeholder={'이메일'} />
        <LoginInput placeholder={'비밀번호'} />
        <LoginButton text={'로그인'} />
        <div className="loginOption">
          <Link to="/join">회원가입</Link>
          <Link to="#">비밀번호 찾기</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
