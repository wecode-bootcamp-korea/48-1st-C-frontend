import React from 'react';
import './Feed.scss';

const Feed = ({ feedData }) => {
  return (
    <div className="feed">
      <div className="feedProfileBox">
        <div className="feedProfileBoxLeft">
          <img
            className="profileImg"
            src={feedData.userImage}
            alt="프로필 이미지"
          />
          <p className="userName">
            <b>{feedData.userName}</b>
          </p>
        </div>
        <div className="feedProfileBoxRight">
          <p className="date">00.00.00</p>
          <button className="deleteBtn">삭제</button>
        </div>
      </div>
      <div className="feedContentBox">
        <p className="feedContent">{feedData.feedContent}</p>
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
