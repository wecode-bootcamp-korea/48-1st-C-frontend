import React, { useState } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
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

  return (
    <>
      <form className="inputForm" onSubmit={handleWriteComment}>
        <Input
          className="feedInput"
          type="text"
          placeholder="댓글을 작성해주세요."
          value={feedComment}
          onChange={onCommentChange}
        />
        <Button className="postBtn" text="댓글 게시" />
      </form>

      {feedCommentList.map((elements, index) => (
        <div className="commentContainer" key={index}>
          <div className="commentProfileBox">
            <img
              className="commentProfileImg"
              src={feedData.profile_image}
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
                  <button className="editBtn">수정</button>
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
