import React, { useEffect, useState } from 'react';
import './PostList.scss';
import Feed from './components/Feed';

const PostList = () => {
  const [feedsData, setFeedsData] = useState([]);

  useEffect(() => {
    fetch('/data/data.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => setFeedsData(data));
  });

  return (
    <div className="postListContainer">
      <div className="postListContentContainer">
        <div className="feedContainer">
          <div className="feedContentContainer">
            {feedsData.map((feedData, index) => (
              <Feed key={index} feedData={feedData} />
            ))}
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
