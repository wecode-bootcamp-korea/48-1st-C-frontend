import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from './components/LoginInput';
import LoginButton from './components/LoginButton';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const [loginUserInfo, setLoginUserInfo] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    fetch('data/userData.json')
      .then(res => res.json())
      .then(userData => {
        const userMatched = userData.find(
          user =>
            user.email === loginUserInfo.email &&
            user.password === loginUserInfo.password,
        );

        if (userMatched) {
          navigate('/join-done');
        } else {
          alert('이메일 또는 비밀번호가 일치하지 않습니다.');
        }
      })
      .catch(() => {
        alert('데이터를 불러오는 데 실패했습니다.');
      });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setLoginUserInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login">
      <div className="logingLogo">
        <img src="/images/Logo.png" alt="Weread" />
        <img src="/images/logo_wecode.png" alt="WECODE" />
      </div>
      <div className="loginForm">
        <LoginInput
          placeholder={'이메일'}
          type={'text'}
          name={'email'}
          value={loginUserInfo.email}
          onChange={handleInputChange}
        />
        <LoginInput
          placeholder={'비밀번호'}
          type={'password'}
          name={'password'}
          value={loginUserInfo.password}
          onChange={handleInputChange}
        />
        <LoginButton text={'로그인'} onClick={handleLogin} />
        <div className="loginOption">
          <Link to="/join-info">회원가입</Link>
          <Link to="#">비밀번호 찾기</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
