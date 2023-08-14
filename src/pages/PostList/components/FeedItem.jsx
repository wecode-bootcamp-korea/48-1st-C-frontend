import React from 'react';
import './FeedItem.scss';

const FeedItem = ({ like, heartToggle, handleHeartToggle, feedData }) => {
  return (
    <>
      <div className="feedContentBox">
        <p className="feedContent">{feedData.content}</p>
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
    </>
  );
};

export default FeedItem;
