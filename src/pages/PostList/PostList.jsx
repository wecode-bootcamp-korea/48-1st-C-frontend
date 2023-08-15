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
  }, []);

  const noListMessage = '게시글이 없습니다.';

  const handleRemove = targetId => {
    const newList = feedsData.filter(data => data.id !== targetId);
    setFeedsData(newList);
  };

  return (
    <div className="postListContainer">
      <div className="postListContentContainer">
        <div className="feedContainer">
          <div className="feedContentContainer">
            {feedsData.length === 0 ? (
              <p>{noListMessage}</p>
            ) : (
              <>
                {feedsData.map(feedData => (
                  <Feed
                    key={feedData.id}
                    feedData={feedData}
                    handleRemove={handleRemove}
                  />
                ))}
              </>
            )}
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
