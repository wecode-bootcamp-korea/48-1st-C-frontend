import React from 'react';
import BackButtonContainer from './BackButtonContainer';
import LoginInput from '../Login/components/LoginInput';
import Birthday from './Birthday';
import LoginButton from '../Login/components/LoginButton';
import './Join.scss';

export default function Join() {
  return (
    <div className="join">
      <BackButtonContainer />
      <div className="joinForm">
        <h1>회원가입</h1>
        <div className="inputDescription">
          <p>기본 정보</p>
          <p id="required">필수 사항</p>
        </div>
        <LoginInput placeholder={'이메일'} />
        <LoginInput placeholder={'비밀번호'} />
        <LoginInput placeholder={'비밀번호 확인'} />
        <div className="inputDescription">
          <p>닉네임</p>
          <p>선택 사항</p>
        </div>
        <LoginInput placeholder={'닉네임'} />
        <div className="inputDescription">
          <p>기본 정보</p>
          <p>필수 사항</p>
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
          <LoginInput placeholder={'휴대폰 번호를 입력해주세요.'} />
        </div>
        <div className="inputDescription">
          <p>생일</p>
          <p>선택 사항</p>
        </div>
        <div className="birthday">
          <Birthday />
        </div>
      </div>
      <LoginButton text={'회원 가입'} />
    </div>
  );
}
