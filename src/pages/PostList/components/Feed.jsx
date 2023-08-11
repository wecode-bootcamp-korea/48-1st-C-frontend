import React from 'react';
import './Feed.scss';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedProfileBox">
        <div className="feedProfileBoxLeft">
          <img
            className="profileImg"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            alt="프로필 이미지"
          />
          <p className="userName">
            <b>이인재</b>
          </p>
        </div>
        <div className="feedProfileBoxRight">
          <p className="date">00.00.00</p>
          <button className="deleteBtn">삭제</button>
        </div>
      </div>
      <div className="feedContentBox">
        <p className="feedContent">
          일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 돌리는
          사람들의 경향을 말하며, 따라서 시스템이 실제보다 더 지능적이라고
          믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인
          ELIZA의 이름을 따서 명명되었다.
        </p>
      </div>
      <div className="feedDescriptionBox">
        <div className="feedDescriptionTop">
          <p>좋아요 00</p>
          <p>댓글 00</p>
        </div>
        <img
          className="feedHeartImg"
          src={process.env.PUBLIC_URL + '/images/heart.svg'}
          alt="좋아요 버튼"
        />
      </div>
    </div>
  );
};

export default Feed;
