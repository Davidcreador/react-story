import React, { useState, useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './tailwind.generated.css';
import Service from "./services";
import { PostType } from './types';
import Loading from './components/Loading';
import Accordion from './components/Accordion';

function App() {
  const [posts, setPosts] = useState<[]>([]);
  const [commentsPerPost, setCommentsPerPost] = useState<[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const posts = await Service.fetchPosts();
    setPosts(posts);
  }

  const fetchCommentsByPostId = async (id: number) => {
    const comments = await Service.fetchCommentsByPostId(id);
    setCommentsPerPost(comments);
  }

  const renderPosts = () => {
    return posts && posts.length ? posts.map((post: PostType, index) => (
      <Accordion
        post={post}
        fetchCommentsByPostId={fetchCommentsByPostId}
        comments={commentsPerPost} key={index} />
    )) : <Loading message="Loading posts" />
  }

  return (
    <div className="App max-w-3xl container mx-auto px-16">
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
