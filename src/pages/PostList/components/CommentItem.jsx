import React, { useState } from 'react';
import './CommentItem.scss';

const CommentItem = ({ feedData, feedDate }) => {
  const [feedComment, setFeedComment] = useState('');
  const [feedCommentList, setFeedCommentList] = useState([]);

  const onCommentChange = e => {
    setFeedComment(e.target.value);
  };

  const handleWriteComment = e => {
    e.preventDefault();
    if (feedComment === '') return;
    setFeedComment('');
    setFeedCommentList(cur => [feedComment, ...cur]);
  };

  const handleDeleteComment = targetId => {
    const newComment = feedCommentList
      .slice(0, targetId)
      .concat(feedCommentList.slice(targetId + 1));
    setFeedCommentList(newComment);
  };

  const handleEditCOmment = () => {};

  return (
    <>
      <form className="inputForm" onSubmit={handleWriteComment}>
        <input
          type="text"
          placeholder="댓글을 작성해주세요."
          value={feedComment}
          className="feedInput"
          onChange={onCommentChange}
        />
        <button className="postBtn">댓글 게시</button>
      </form>

      {feedCommentList.map((elements, index) => (
        <div className="commentContainer" key={index}>
          <div className="commentProfileBox">
            <img
              className="commentProfileImg"
              src={feedData.userImage}
              alt="프로필 이미지"
            />
            <div className="commentRightBox">
              <div className="commentDetailUserInfo">
                <p className="userName">
                  <b>{feedData.nickname}</b>
                </p>
                <div className="commentProfileBoxRight">
                  <p className="date">{feedDate}</p>
                  <button
                    className="deleteBtn"
                    onClick={() => handleDeleteComment(index)}
                  >
                    삭제
                  </button>
                  <button className="editBtn" onClick={handleEditCOmment}>
                    수정
                  </button>
                </div>
              </div>
              <p className="userCommentBox">{elements}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentItem;
