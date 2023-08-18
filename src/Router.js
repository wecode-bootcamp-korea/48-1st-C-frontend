import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostList from './pages/PostList/PostList';
import Post from './pages/Post/Post';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post-list" element={<PostList />} />
        <Route path="/create-post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
