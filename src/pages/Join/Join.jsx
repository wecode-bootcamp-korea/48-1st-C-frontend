import React from 'react';
import LoginButton from '../Login/components/LoginButton';
import LoginInput from '../Login/components/LoginInput';
import BirthdayPicker from './BirthdayPicker';

export default function Join() {
  return (
    <div className="join">
      <div className="">
        <h3>회원가입</h3>
        <div>
          <p>기본 정보</p>
          <p>필수 사항</p>
        </div>
        <LoginInput placeholder={'이메일'} />
        <LoginInput placeholder={'비밀번호'} />
        <LoginInput placeholder={'비밀번호 확인'} />
        <div>
          <p>닉네임</p>
          <p>선택 사항</p>
        </div>
        <LoginInput placeholder={'닉네임'} />
        <div>
          <p>기본 정보</p>
          <p>필수 사항</p>
        </div>
        <div className="PhoneNumber">
          <select>
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
            <option value="019">019</option>
          </select>
          <LoginInput placeholder={'비밀번호'} />
        </div>
        <BirthdayPicker />
      </div>
      <LoginButton text={'회원 가입'} />
    </div>
  );
}
