import React, { useState, useEffect, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PostType, CommentType } from "../types";
import Loading from './Loading';
import {
  fetchAllCommentsById,
  selectComments
} from '../features/comments/commentSlice';

type Props = {
  post: PostType
}

const Post = ({
  post,
}: Props) => {
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!visible) return
    dispatch(fetchAllCommentsById(post.id))
  }, [visible, dispatch, post.id])

  const toggleComments = () => {
    setVisible(!visible);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitting...");
  }

  // TODO: refactor this to DRY the code and avoid nesting
  const renderCommentSection = () => (
    <>
      {visible && (comments.loading !== 'pending') ? (
        comments && comments.comments.length ? comments.comments.map((comment: any) => (
          comment.map((cmt: any) => (
            // Had to do this to match array of comments for specific post
            // TODO: Lots of room for improvement
            cmt.postId === post.id ? (
              <div key={cmt.id} className="bg-gray-200 pt-4">
                <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                  <div className="shadow-lg rounded-lg bg-white mx-auto p-4 notification-box">
                    <div className="text-sm pb-2">{cmt.name}</div>
                    <div className="text-sm text-gray-600  tracking-tight ">{cmt.body}</div>
                  </div>
                </div>
              </div>
            ) : null
          ))
        )) : <Loading message="Loading comments" />
      ) : null}

      {visible && (comments.loading !== 'pending') && (
        <form onSubmit={handleSubmit} className="m-4 p-10 bg-white">
          <div className="">
            <label className="block text-sm text-gray-00 mb-3">Add new comment</label>
            <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded mb-4" id="cus_comment_title" name="cus_comment_title" type="text" required placeholder="Comment title" aria-label="Comment title" />
            <textarea className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_comment" name="cus_comment" required placeholder="Your comment" aria-label="Comment" />
          </div>
          <button className="text-xl font-medium bg-indigo-500 w-full text-white py-2 mt-2">Add comment</button>
        </form>
      )}
    </>

  )

  return (
    <div data-id={post.id} className="w-full py-4 px-8 bg-white shadow-lg rounded-lg mt-20">
      <div className="flex justify-center md:justify-end -mt-16">
        <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" alt="random-placeholder" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{post.title}</h2>
        <p className="mt-2 text-gray-600">{post.body}</p>
      </div>
      <div className="flex justify-end mt-4 mb-4">
        <button onClick={() => toggleComments()} className="text-xl font-medium text-indigo-500">
          Read Comments
          {visible ?
            (
              <div className="rounded-full border border border-indigo-500 w-7 h-7 flex items-center justify-center bg-indigo-500">
                <svg aria-hidden="true" data-reactid="281" fill="none" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="18 15 12 9 6 15">
                  </polyline>
                </svg>
              </div>
            ) : (
              <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="6 9 12 15 18 9">
                  </polyline>
                </svg>
              </div>
            )}
        </button>
      </div>
      {renderCommentSection()}
    </div>
  )
}

export default Post;
