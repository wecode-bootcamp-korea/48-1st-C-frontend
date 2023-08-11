import React from 'react';
import './PostList.scss';
import Feed from './components/Feed';

const PostList = () => {
  return (
    <div className="postListContainer">
      <div className="postListContentContainer">
        <div className="feedContainer">
          <div className="feedContentContainer">
            <Feed />
            <Feed />
            <Feed />
          </div>
        </div>
        <div className="btnBox">
          <button className="btn">글 쓰기</button>
        </div>
      </div>
    </div>
  );
};

export default PostList;
