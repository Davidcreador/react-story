import React, { useState, useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './tailwind.generated.css';
import Service from "./services";
import { PostType } from './types';
import Post from './components/Post';
import Loading from './components/Loading';

function App() {
  const [posts, setPosts] = useState<[]>([]);
  const [commentsPerPost, setCommentsPerPost] = useState<[]>([]);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const posts = await Service.fetchPosts();
    setPosts(posts);
  }

  const fetchCommentsByPostId = async (id: number) => {
    if (visible) return;
    const comments = await Service.fetchCommentsByPostId(id);
    setCommentsPerPost(comments);
    setVisible(!visible);
  }

  const renderPosts = () => {
    return posts && posts.length ? posts.map((post: PostType, index) => (
      <Post
        key={index}
        visible={visible}
        post={post}
        comments={commentsPerPost}
        fetchCommentsByPostId={fetchCommentsByPostId} />
    )) : <Loading message="Loading posts" />
  }

  return (
    <div className="App container mx-auto">
      <header className="App-header">
        <Counter />
        <h1 className="text-4xl mb-5">Posts</h1>
        <section className="shadow">
          {renderPosts()}
        </section>
      </header>
    </div>
  );
}

export default App;
