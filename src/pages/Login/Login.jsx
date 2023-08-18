import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const [loginUserInfo, setLoginUserInfo] = useState({
    email: '',
    password: '',
  });

  const emailIsVaild =
    loginUserInfo.email.includes('@') && loginUserInfo.email.includes('.');
  const passwordIsVaild = loginUserInfo.password.length >= 8;

  const isVaild = emailIsVaild && passwordIsVaild;

  const buttonClassName = isVaild ? 'loginButton buttonIsVaild' : 'loginButton';

  const handleLogin = () => {
    fetch('http://10.58.52.93:3000/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(loginUserInfo),
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          localStorage.setItem('accessToken', data.accessToken);
          navigate('/join-done');
        }
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
        <Input
          className="loginInput"
          placeholder="이메일"
          type="email"
          name="email"
          value={loginUserInfo.email}
          onChange={handleInputChange}
        />
        <Input
          className="loginInput"
          placeholder="비밀번호"
          type="password"
          name="password"
          value={loginUserInfo.password}
          onChange={handleInputChange}
        />
        <Button
          text="로그인"
          onClick={handleLogin}
          className={buttonClassName}
          disabled={!isVaild}
        />
        <div className="loginOption">
          <Link to="/join-info">회원가입</Link>
          <Link to="#">비밀번호 찾기</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
