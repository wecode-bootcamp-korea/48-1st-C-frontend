import React, { useState } from 'react';
import './Feed.scss';

const Feed = ({ feedData, handleRemove }) => {
  const [heartToggle, setHeartToggle] = useState(false);
  const [like, setLike] = useState(0);

  const feedDate = new Date(feedData.date).toLocaleDateString();

  const handleHeartToggle = () => {
    setHeartToggle(!heartToggle);
    setLike(heartToggle ? like - 1 : like + 1);
  };

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
          <p className="date">{feedDate}</p>
          <button
            className="deleteBtn"
            onClick={() => handleRemove(feedData.id)}
          >
            삭제
          </button>
        </div>
      </div>
      <div className="feedContentBox">
        <p className="feedContent">{feedData.feedContent}</p>
      </div>
      <div className="feedDescriptionBox">
        <div className="feedDescriptionTop">
          <p>좋아요 {like}</p>
          <p>댓글 00</p>
        </div>
        <img
          onClick={handleHeartToggle}
          className="feedHeartImg"
          src={
            heartToggle
              ? process.env.PUBLIC_URL + '/images/fillheart.svg'
              : process.env.PUBLIC_URL + '/images/heart.svg'
          }
          alt="좋아요 버튼"
        />
      </div>
    </div>
  );
};

export default Feed;
