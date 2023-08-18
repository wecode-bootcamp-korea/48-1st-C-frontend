import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButtonContainer from './BackButtonContainer';
import Birthday from './Birthday';
import Button from '../../components/Button';
import Input from '../../components/Input';
import './JoinInfo.scss';

const AREA_CODE = ['010', '011', '016', '017', '018', '019'];

export default function JoinInfo() {
  const navigate = useNavigate();

  const [joinUserInfo, setJoinUserInfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
    areaCode: '',
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

  const emailIsVaild =
    joinUserInfo.email.includes('@') && joinUserInfo.email.includes('.');
  const passwordIsVaild = joinUserInfo.password.length >= 8;
  const passwordCheckIsVaild =
    joinUserInfo.password === joinUserInfo.passwordCheck;

  const isVaild = emailIsVaild && passwordIsVaild && passwordCheckIsVaild;

  const ButtonClassName = isVaild ? 'loginButton buttonIsVaild' : 'loginButton';

  const handleJoin = () => {
    joinUserInfo.phoneNumber = joinUserInfo.phoneNumber.replace(
      /(\d{4})(\d{4})/,
      '$1-$2',
    );
    const formattedPhoneNumber =
      joinUserInfo.areaCode === ''
        ? `010-${joinUserInfo.phoneNumber}`
        : `${joinUserInfo.areaCode}-${joinUserInfo.phoneNumber}`;
    const updatedUserInfo = {
      ...joinUserInfoData,
      phoneNumber: formattedPhoneNumber,
    };

    if (isVaild) {
      navigate('/join-done');
      fetch('http://10.58.52.93:3000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(updatedUserInfo),
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
      setJoinUserInfo(prev => ({
        ...prev,
        phoneNumber: value,
      }));
    } else if (name === 'areaCode') {
      setJoinUserInfo(prev => ({
        ...prev,
        areaCode: value,
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
        <h1 className="">회원가입</h1>
        <p className="joinIsVaild emailIsVaild">
          {!emailIsVaild && '❗아이디는 이메일 형식이어야 합니다.❗'}
        </p>
        <p className="joinIsVaild">
          {!passwordIsVaild && '❗비밀번호는 8글자 이상이어야 합니다.❗'}
        </p>
        <p className="joinIsVaild passwordCheckIsVaild">
          {!passwordCheckIsVaild && '❗비밀번화와 일치하지 않습니다.❗'}
        </p>
        <div className="inputDescription">
          <p className="inputDescriptionLeft">기본 정보</p>
          <p className="inputDescriptionRight" id="required">
            필수 사항
          </p>
        </div>
        <Input
          className="joinInput"
          placeholder="이메일"
          type="email"
          name="email"
          value={joinUserInfo.email}
          onChange={handleInputChange}
        />
        <Input
          className="joinInput"
          placeholder="비밀번호"
          type="password"
          name="password"
          value={joinUserInfo.password}
          onChange={handleInputChange}
        />
        <Input
          className="joinInput"
          placeholder="비밀번호 확인"
          type="password"
          name="passwordCheck"
          value={joinUserInfo.passwordCheck}
          onChange={handleInputChange}
        />
        <div className="inputDescription">
          <p className="inputDescriptionLeft">닉네임</p>
          <p className="inputDescriptionRight">선택 사항</p>
        </div>
        <Input
          className="joinInput"
          placeholder="닉네임"
          type="text"
          name="nickname"
          value={joinUserInfo.nickname}
          onChange={handleInputChange}
        />
        <div className="inputDescription">
          <p className="inputDescriptionLeft">전화번호</p>
          <p className="inputDescriptionRight">선택 사항</p>
        </div>
        <div className="phoneNumber">
          <select
            value={joinUserInfo.areaCode}
            name="areaCode"
            onChange={handleInputChange}
          >
            {AREA_CODE.map(areaCode => (
              <option key={areaCode} value={areaCode}>
                {areaCode}
              </option>
            ))}
          </select>
          <Input
            className="joinInput"
            placeholder="휴대폰 번호를 입력해주세요"
            type="text"
            name="phoneNumber"
            value={joinUserInfo.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputDescription">
          <p className="inputDescriptionLeft">생일</p>
          <p className="inputDescriptionRight">선택 사항</p>
        </div>
        <div className="birthday">
          <Birthday onBirthdayChange={handleBirthdayChange} />
        </div>
      </div>
      <Button
        text="회원 가입"
        onClick={handleJoin}
        className={ButtonClassName}
        disabled={!isVaild}
      />
    </div>
  );
}
