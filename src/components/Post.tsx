import React, { useState, useEffect, FormEvent, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PostType, CommentType } from "../types";
import Loading from './Loading';

type Props = {
  post: PostType,
  comments: any,
  fetchComments: (post: PostType) => void
}

const Post = ({
  post,
  comments,
  fetchComments
}: Props) => {
  const elementRef = useRef();
  const [visible, setVisible] = useState<boolean>(false);

  const toggleComments = (post: PostType) => {
    setVisible(!visible);
    fetchComments(post);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitting...");
  }

  // TODO: refactor this to DRY the code and avoid nesting
  const renderCommentSection = () => {
    if (comments.loading === 'pending') return <Loading message="Loading comments" />
    return (
      comments.comments.map((comment: any) => (
        comment.postId === post.id ? (
          <div key={comment.id} className="bg-gray-200 pt-4">
            <div className="pl-8 pr-8 pb-5 text-grey-darkest">
              <div className="shadow-lg rounded-lg bg-white mx-auto p-4 notification-box">
                <div className="text-sm pb-2">{comment.name}</div>
                <div className="text-sm text-gray-600  tracking-tight ">{comment.body}</div>
              </div>
            </div>
          </div>
        ) : null
      ))
    )
  }

  return (
    <div data-id={post.id} className="w-full py-4 px-8 bg-white shadow-lg rounded-lg mt-20">
      <div className="flex justify-center md:justify-end -mt-16">
        <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" alt="random-placeholder" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{post.title}</h2>
        <p className="mt-2 text-gray-600">{post.body}</p>
      </div>

      <div className="flex justify-end mt-4 mb-4" ref={() => elementRef}>
        <button onClick={() => toggleComments(post)} className="text-xl font-medium text-indigo-500">
          Read Comments {post.id}
        </button>
      </div>

      {renderCommentSection()}
      <form onSubmit={handleSubmit} className="m-4 p-10 bg-white">
        <div className="">
          <label className="block text-sm text-gray-00 mb-3">Add new comment</label>
          <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded mb-4" id="cus_comment_title" name="cus_comment_title" type="text" required placeholder="Comment title" aria-label="Comment title" />
          <textarea className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_comment" name="cus_comment" required placeholder="Your comment" aria-label="Comment" />
        </div>
        <button className="text-xl font-medium bg-indigo-500 w-full text-white py-2 mt-2">Add comment</button>
      </form>
    </div>
  )
}

export default Post;
