import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './tailwind.generated.css';
import { PostType } from './types';
import Loading from './components/Loading';
import Post from './components/Post';
import {
  fetchAllPosts,
  selectPosts
} from './features/posts/postSlice';
import {
  fetchAllCommentsById,
  selectComments
} from './features/comments/commentSlice';

function App() {
  const data = useSelector(selectPosts);
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  const fetchComments = (post: PostType) => dispatch(fetchAllCommentsById(post))

  const renderPosts = () => {
    if (data.loading === 'pending') return (<Loading message="Loading posts" />)

    return data.posts.map((post: PostType) => <Post post={post} key={post.id} comments={comments} fetchComments={fetchComments as any} />)
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
