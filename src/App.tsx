import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './tailwind.generated.css';
import { PostType } from './types';
import Loading from './components/Loading';
import Accordion from './components/Accordion';
import {
  fetchAllPosts,
  selectPosts
} from './features/posts/postSlice';

function App() {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (posts.loading === 'pending') return (<Loading message="Loading posts" />)

    return posts.posts.map((post: PostType) => <Accordion post={post} key={post.id} />)
  }

  return (
    <div className="App max-w-3xl container mx-auto px-16 mt-10">
      <header className="App-header">
        <h1 className="text-4xl">Posts</h1>
      </header>
      <div className="my-2">
        <section className="shadow">
          {renderPosts()}
        </section>
      </div>
    </div>
  );
}

export default App;
