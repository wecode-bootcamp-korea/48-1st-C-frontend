import React from 'react';
import './CommentItem.scss';

const CommentItem = ({ feedData, feedDate }) => {
  return (
    <>
      <form className="inputForm">
        <input
          type="text"
          placeholder="댓글을 작성해주세요."
          className="feedInput"
        />
        <button className="postBtn">댓글 게시</button>
      </form>

      <div className="commentContainer">
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
                <button className="deleteBtn">삭제</button>
                <button className="editBtn">수정</button>
              </div>
            </div>
            <p className="userCommentBox">
              sdafasdfdsafadasfsdafasdfdsafadasfsdafasdfdsafadasfsdafasdfdsafadasfsdafasdfdsafadasfsdafasdfdsafadasf
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentItem;
