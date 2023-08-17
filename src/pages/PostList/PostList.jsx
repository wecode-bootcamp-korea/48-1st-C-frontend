import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Feed from './components/Feed';
import './PostList.scss';

const noListMessage = '게시글이 없습니다.';

const PostList = () => {
  const [feedsData, setFeedsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/data.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        const sortedFeedList = data.data.sort(
          (a, b) => b.createdAt - a.createdAt,
        );
        setFeedsData(sortedFeedList);
      });
  }, []);

  const handleRemove = targetId => {
    fetch('/data/data.json', {
      method: 'DELETE',
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('삭제 못해요');
        }
        return res.json();
      })
      .then(data => {
        if (!data) alert('삭제를 실패했습니다.');
        if (data.message === 'ok') {
          const newFeedList = feedsData.filter(
            data => data.userId !== targetId,
          );
          setFeedsData(newFeedList);
        }
      });
  };

  const goToCreatePost = () => {
    navigate('/create-post');
  };

  return (
    <div className="postListContainer">
      <div className="feedContainer">
        {!feedsData ? (
          <p>{noListMessage}</p>
        ) : (
          feedsData.map(feedData => (
            <Feed
              key={feedData.postId}
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
