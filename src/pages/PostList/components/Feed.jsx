import React, { useState } from 'react';
import { FormatDate } from '../../../utils/FormatDate';
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
      setFeedLikeCount(prev => prev - 1);
      setIsHeartButtonToggle(false);
    }
  };

  const handleShowFeedContent = () => {
    setIsShowFeedContent(prev => !prev);
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
            <p className="date">{FormatDate(feedData)}</p>
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
        <CommentItem feedData={feedData} feedDate={FormatDate(feedData)} />
      )}
    </>
  );
};

export default Feed;
