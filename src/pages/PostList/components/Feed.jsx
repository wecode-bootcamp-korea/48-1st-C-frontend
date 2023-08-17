import React, { useState } from 'react';
import { FormatDate } from '../../../utils/FormatDate';
import CommentItem from './CommentItem';
import './Feed.scss';

const Feed = ({ feedData, handleRemove }) => {
  const [feedLikeCount, setFeedLikeCount] = useState(feedData.likeCount);
  const [isHeartButtonToggle, setIsHeartButtonToggle] = useState(false);
  const [isShowFeedContent, setIsShowFeedContent] = useState(false);

  const handleHeartToggle = e => {
    e.stopPropagation();
    fetch('/data/data.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // Authorization: localStorage.getItem('access_token'),
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

  const handleEdit = () => {};

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
              onClick={e => {
                e.stopPropagation();
                handleRemove(feedData.postId);
              }}
            >
              삭제
            </button>
            <button
              className="editBtn"
              onClick={() => handleEdit(feedData.postId)}
            >
              수정
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
