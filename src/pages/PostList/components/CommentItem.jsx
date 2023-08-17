import React, { useState } from 'react';
import Input from '../../../components/Input';
import './CommentItem.scss';

const CommentItem = ({ feedData, feedDate }) => {
  const [feedComment, setFeedComment] = useState('');
  const [feedCommentList, setFeedCommentList] = useState([]);

  const handleCommentChange = e => {
    const { value } = e.target;
    setFeedComment(value);
  };

  // const getComments = () => {
  //   const num = feedData.comments.map(el => el.comment);
  //   for (let i = 0; i < num.length; i++) {
  //     return num[i];
  //   }
  // };

  const handleWriteComment = e => {
    e.preventDefault();
    if (feedComment === '') return;
    setFeedComment('');

    fetch('http://10.58.52.158:3000/threads/commentUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // Authorization: localStorage.getItem('access_token'),
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIyLCJlbWFpbCI6InRob21wc29uQGdtYWlsLmNvbSIsImlhdCI6MTY5MjI1MzIwMH0.g4rFX5-jmpIee6AQSVCDHJURVqbdT3hmIsVmfSh6EP4',
      },
      body: JSON.stringify({
        content: feedComment,
        threadId: feedData.postId,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setFeedCommentList(cur => [data, ...cur]);
      });
  };

  const handleDeleteComment = targetId => {
    fetch('/data/data.json', {
      method: 'DELETE',
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`${res.status} error`);
        }
        return res.json();
      })
      .then(data => {
        if (!data) alert('삭제를 실패했습니다.');
        if (data.message === 'ok') {
          const newComment = feedCommentList
            .slice(0, targetId)
            .concat(feedCommentList.slice(targetId + 1));
          setFeedCommentList(newComment);
        }
      });
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleWriteComment}>
        <Input
          className="feedInput"
          type="text"
          placeholder="댓글을 작성해주세요."
          value={feedComment}
          onChange={handleCommentChange}
        />
        <button className="postBtn">댓글 게시</button>
      </form>
      {feedCommentList.map((elements, index) => (
        <div className="commentContainer" key={index}>
          <div className="commentProfileBox">
            <img
              className="commentProfileImg"
              src={feedData.profileImage}
              alt="프로필 이미지"
            />
            <div className="commentRightBox">
              <div className="commentDetailUserInfo">
                <p className="userName">
                  <b>{feedData.userName}</b>
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
