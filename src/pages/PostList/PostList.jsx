import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Feed from './components/Feed';
import './PostList.scss';

const PostList = () => {
  const [feedsData, setFeedsData] = useState([]);
  const navigate = useNavigate();

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

  const goToCreatePost = () => {
    navigate('/create-post');
  };

  return (
    <div className="postListContainer">
      <div className="feedContainer">
        {feedsData.length === 0 ? (
          <p>{noListMessage}</p>
        ) : (
          feedsData.map(feedData => (
            <Feed
              key={feedData.id}
              feedData={feedData}
              handleRemove={handleRemove}
            />
          ))
        )}
      </div>
      <div className="btnBox">
        <Button className="btn" text="글 쓰기" onClick={goToCreatePost} />
      </div>
    </div>
  );
};

export default PostList;
