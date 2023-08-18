import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormatDate } from '../../../utils/FormatDate';
import CommentItem from './CommentItem';
import './Feed.scss';

const Feed = ({ feedData, handleRemove }) => {
  const [feedLikeCount, setFeedLikeCount] = useState(feedData.likeCount);
  const [isHeartButtonToggle, setIsHeartButtonToggle] = useState(
    feedData.isLiked,
  );
  const [isShowFeedContent, setIsShowFeedContent] = useState(false);

  const navigate = useNavigate();

  const handleHeartToggle = () => {
    // e.stopPropagation();
    fetch('/data/data.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        isLiked: isHeartButtonToggle,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'ok') {
          setIsHeartButtonToggle(prev => !prev);
          setFeedLikeCount(prev => (isHeartButtonToggle ? prev - 1 : prev + 1));
        }
      });
  };

  const handleShowFeedContent = targetId => {
    setIsShowFeedContent(prev => !prev);
  };

  return (
    <>
      <div className="feed">
        <div
          className="feedExceptDescription"
          onClick={() => handleShowFeedContent(feedData.postId)}
        >
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
              <div className={feedData.isMyPost ? 'btnBoxShow' : 'btnBoxHide'}>
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
                  onClick={() => navigate('/edit-post')}
                >
                  수정
                </button>
              </div>
            </div>
          </div>
          <div className="feedContentBox">
            <p className="feedContent">{feedData.content}</p>
          </div>
        </div>
        <div className="feedDescriptionBox">
          <div className="feedDescriptionTop">
            <p>좋아요 {feedLikeCount}</p>
            <p>댓글 {feedData.commentsCount}</p>
          </div>
          <img
            onClick={() => {
              handleHeartToggle();
              setIsHeartButtonToggle(prev => !prev);
            }}
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
