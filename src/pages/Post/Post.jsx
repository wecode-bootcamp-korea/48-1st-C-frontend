import React, { useCallback, useEffect, useState } from 'react';
import Avatar from '../../components/Avatar';
import './Post.scss';
import { useNavigate } from 'react-router-dom';

export default function Post() {
  const [isClicked, setIsClicked] = useState(false);
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (content.length > 0) {
      handleCreatePost();
    }
    return;
  };

  const navigate = useNavigate();
  const goToPostList = () => {
    navigate('/post-list');
  };
  const handleCreatePost = e => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: '',
        password: '',
      }),
    })
      .then(res => {
        console.log(res);
        if (res.ok === true) {
          return res;
        }
        throw new Error('통신 실패 😭');
      })
      .catch(error => console.log(error))
      .then(data => {
        console.log('???', data);
        if (typeof data !== 'undefined') {
          alert('성공');
          goToPostList();
        } else if (typeof data === 'undefined') {
          alert('안 됨');
        }
      });
  };

  const handleCancel = () => {
    if (window.confirm('작성을 취소 하시겠습니까?')) {
      goToPostList();
    }
  };

  return (
    <div className="container">
      <div className="wrap">
        <Avatar image="https://images.unsplash.com/photo-1682685797332-e678a04f8a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" />
        <div className="mainContentContainer">
          <p className="userName">정다인</p>
          <textarea
            className="threadInputArea"
            onChange={e => {
              setContent(e.target.value);
            }}
            placeholder={content ? { content } : '스레드를 시작하세요 🙌'}
            value={content}
          />
        </div>
      </div>
      <hr className="horizonLine" />
      <div className="clickBtn">
        <button className="delBtn" onClick={handleCancel}>
          취소
        </button>
        <button
          disabled={content.length > 0 ? false : true}
          className="postBtn"
          onClick={() => {
            handleSubmit();
            setIsClicked(true);
          }}
        >
          게시
        </button>
      </div>
    </div>
  );
}
