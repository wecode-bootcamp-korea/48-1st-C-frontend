import React, { useState } from 'react';
import { formatDate } from '../../../utils/formatDate';
import CommentItem from './CommentItem';
import './Feed.scss';

const Feed = ({ feedData, handleRemove }) => {
  const [feedLikeCount, setFeedLikeCount] = useState(0);
  const [isHeartButtonToggle, setIsHeartButtonToggle] = useState(false);
  const [isShowFeedContent, setIsShowFeedContent] = useState(false);

  const handleHeartToggle = e => {
    e.stopPropagation();

    if (!isHeartButtonToggle) {
      setFeedLikeCount(prev => prev + 1);
      setIsHeartButtonToggle(true);
    } else if (feedLikeCount > 0) {
      setFeedLikeCount(feedLikeCount - 1);
      setIsHeartButtonToggle(false);
    }
  };

  const handleShowFeedContent = () => {
    setIsShowFeedContent(!isShowFeedContent);
  };

  return (
    <>
      <div className="feed" onClick={handleShowFeedContent}>
        <div className="feedProfileBox">
          <div className="feedProfileBoxLeft">
            <img
              className="profileImg"
              src={feedData.profileImage}
              alt="프로필 이미지"
            />
            <p className="userName">
              <b>{feedData.nickname}</b>
            </p>
          </div>
          <div className="feedProfileBoxRight">
            <p className="date">{formatDate(feedData)}</p>
            <button
              className="deleteBtn"
              onClick={() => handleRemove(feedData.userId)}
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
            <p>댓글 {feedData.comments.length}</p>
          </div>
          <img
            onClick={handleHeartToggle}
            className="feedHeartImg"
            src={`/images/${isHeartButtonToggle ? 'fill' : ''}heart.svg`}
            alt="좋아요 버튼"
          />
        </div>
      </div>
      {isShowFeedContent && (
        <CommentItem feedData={feedData} feedDate={formatDate(feedData)} />
      )}
    </>
  );
};

export default Feed;
