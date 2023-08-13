import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostList from './pages/PostList/PostList';
import Login from './pages/Login/Login';
import JoinInfo from './pages/Join/JoinInfo';
import JoinDone from './pages/Join/JoinDone';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join-info" element={<JoinInfo />} />
        <Route path="/join-done" element={<JoinDone />} />
        <Route path="/post-list" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
