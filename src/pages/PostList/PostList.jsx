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
        // Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setFeedsData(data.data);
      });
  }, []);

  const handleRemove = targetId => {
    fetch('http://10.58.52.158:3000/threads/contentDelete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // Authorization: localStorage.getItem('access_token'),
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIyLCJlbWFpbCI6InRob21wc29uQGdtYWlsLmNvbSIsImlhdCI6MTY5MjI1MzIwMH0.g4rFX5-jmpIee6AQSVCDHJURVqbdT3hmIsVmfSh6EP4',
      },
      body: JSON.stringify({
        postId: targetId,
      }),
    });
    // .then(res => {
    //   if (!res.ok) {
    //     throw new Error(`${res.status} error`);
    //   }
    //   return res.json();
    // })
    // .then(data => {
    //   if (data.message === 'ok') {
    //     const newFeedList = feedsData.filter(
    //       data => data.postId !== targetId,
    //     );
    //     setFeedsData(newFeedList);
    //   }
    // });
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
