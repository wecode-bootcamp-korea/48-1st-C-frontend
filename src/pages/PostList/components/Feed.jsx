import React, { useState } from 'react';
import { FormatDate } from '../../../utils/FormatDate';
import CommentItem from './CommentItem';
import './Feed.scss';

const Feed = ({ feedData, handleRemove }) => {
  const [feedLikeCount, setFeedLikeCount] = useState(feedData.likeCount);
  const [isHeartButtonToggle, setIsHeartButtonToggle] = useState(false);
  const [isShowFeedContent, setIsShowFeedContent] = useState(false);

  const handleHeartToggle = () => {
    fetch('/data/data.json', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'ok') {
          setIsHeartButtonToggle(prev => !prev);
          setFeedLikeCount(prev => (isHeartButtonToggle ? prev - 1 : prev + 1));
        }
      });
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
              <b>{feedData.userName}</b>
            </p>
          </div>
          <div className="feedProfileBoxRight">
            <p className="date">{FormatDate(feedData)}</p>
            <button
              className="deleteBtn"
              onClick={() => handleRemove(feedData.postId)}
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
