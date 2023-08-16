import React, { useEffect, useState } from 'react';
import CommentItem from './CommentItem';
import './Feed.scss';

const Feed = ({ feedData, handleRemove }) => {
  const [feedLikeCount, setFeedLikeCount] = useState(0);
  const [isHeartButtonToggle, setIsHeartButtonToggle] = useState(false);
  const [isHideFeedContent, setIsHideFeedContent] = useState(true);

  const feedDate = new Date(feedData.created_at).toLocaleDateString();

  useEffect(() => {
    const heartData = localStorage.getItem('heart');
    if (heartData !== null) setIsHeartButtonToggle(JSON.parse(heartData));
  }, []);

  useEffect(() => {
    localStorage.setItem('heart', JSON.stringify(isHeartButtonToggle));
  }, [isHeartButtonToggle]);

  const handleHeartToggle = e => {
    e.stopPropagation();

    if (!isHeartButtonToggle) {
      setFeedLikeCount(feedLikeCount + 1);
      setIsHeartButtonToggle(true);
    } else if (feedLikeCount > 0) {
      setFeedLikeCount(feedLikeCount - 1);
      setIsHeartButtonToggle(false);
    }
  };

  const handleHideFeedContent = () => {
    setIsHideFeedContent(!isHideFeedContent);
  };

  return (
    <>
      <div className="feed" onClick={handleHideFeedContent}>
        <div className="feedProfileBox">
          <div className="feedProfileBoxLeft">
            <img
              className="profileImg"
              src={feedData.profile_image}
              alt="프로필 이미지"
            />
            <p className="userName">
              <b>{feedData.nickname}</b>
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
          <p className="feedContent">{feedData.content}</p>
        </div>
        <div className="feedDescriptionBox">
          <div className="feedDescriptionTop">
            <p>좋아요 {feedLikeCount}</p>
            <p>댓글 00</p>
          </div>
          <img
            onClick={handleHeartToggle}
            className="feedHeartImg"
            src={
              isHeartButtonToggle
                ? process.env.PUBLIC_URL + '/images/fillheart.svg'
                : process.env.PUBLIC_URL + '/images/heart.svg'
            }
            alt="좋아요 버튼"
          />
        </div>
      </div>
      {isHideFeedContent && (
        <CommentItem feedData={feedData} feedDate={feedDate} />
      )}
    </>
  );
};

export default Feed;
