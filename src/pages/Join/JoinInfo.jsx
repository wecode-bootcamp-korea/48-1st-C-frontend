import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButtonContainer from './BackButtonContainer';
import LoginInput from '../Login/components/LoginInput';
import Birthday from './Birthday';
import LoginButton from '../Login/components/LoginButton';
import './Join.scss';

export default function JoinInfo() {
  const navigate = useNavigate();

  const [joinUserInfo, setJoinUserInfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
    phoneNumber: '',
    birthday: '2023-01-01',
  });
  const joinUserInfoData = {
    email: joinUserInfo.email,
    password: joinUserInfo.password,
    nickname: joinUserInfo.nickname,
    phoneNumber: joinUserInfo.phoneNumber,
    birthday: joinUserInfo.birthday,
  };

  const isVaild =
    joinUserInfo.email.includes('@') &&
    joinUserInfo.email.includes('.') &&
    joinUserInfo.password.length >= 8 &&
    joinUserInfo.password === joinUserInfo.passwordCheck;

  const handleJoin = () => {
    if (isVaild) {
      navigate('/join-done');
      fetch('data/userData.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(joinUserInfoData),
      }).then();
    } else if (
      !joinUserInfo.email.includes('@') ||
      !joinUserInfo.email.includes('.')
    ) {
      alert('이메일 형식을 지켜주세요.');
    } else if (joinUserInfo.password.length < 8) {
      alert('비밀번호는 8자리 이상이어야 합니다.');
    } else if (joinUserInfo.password !== joinUserInfo.passwordCheck) {
      alert('비밀번호 확인이 일치하지 않습니다!');
    }
  };

  const handleBirthdayChange = formattedBirthday => {
    setJoinUserInfo(prev => {
      return {
        ...prev,
        birthday: formattedBirthday,
      };
    });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'phoneNumber') {
      const formattedPhoneNumber = value.replace(
        /(\d{3})(\d{4})(\d{4})/,
        '$1-$2-$3',
      );
      setJoinUserInfo(prev => ({
        ...prev,
        [name]: formattedPhoneNumber,
      }));
    } else if (name === 'birthday') {
      const formattedBirthday = value.replace(
        /(\d{4})(\d{2})(\d{2})/,
        '$1-$2-$3',
      );
      setJoinUserInfo(prev => ({
        ...prev,
        [name]: formattedBirthday,
      }));
    } else {
      setJoinUserInfo(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="joinInfo">
      <BackButtonContainer />
      <div className="joinForm">
        <h1>회원가입</h1>
        <div className="inputDescription">
          <p>기본 정보</p>
          <p id="required">필수 사항</p>
        </div>
        <LoginInput
          placeholder="이메일"
          type="text"
          name="email"
          value={joinUserInfo.email}
          onChange={handleInputChange}
        />
        <LoginInput
          placeholder="비밀번호"
          type="password"
          name="password"
          value={joinUserInfo.password}
          onChange={handleInputChange}
        />
        <LoginInput
          placeholder="비밀번호 확인"
          type="password"
          name="passwordCheck"
          value={joinUserInfo.passwordCheck}
          onChange={handleInputChange}
        />
        <div className="inputDescription">
          <p>닉네임</p>
          <p>선택 사항</p>
        </div>
        <LoginInput
          placeholder="닉네임"
          type="text"
          name="nickname"
          value={joinUserInfo.nickname}
          onChange={handleInputChange}
        />
        <div className="inputDescription">
          <p>전화번호</p>
          <p>선택 사항</p>
        </div>
        <div className="phoneNumber">
          <select>
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
            <option value="019">019</option>
          </select>
          <LoginInput
            placeholder="휴대폰 번호를 입력해주세요"
            type="text"
            name="phoneNumber"
            value={joinUserInfo.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputDescription">
          <p>생일</p>
          <p>선택 사항</p>
        </div>
        <div className="birthday">
          <Birthday onBirthdayChange={handleBirthdayChange} />
        </div>
      </div>
      <LoginButton text="회원 가입" onClick={handleJoin} />
    </div>
  );
}
