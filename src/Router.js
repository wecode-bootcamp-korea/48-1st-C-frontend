import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostList from './pages/PostList/PostList';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/post-list" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
