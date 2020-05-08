import React from 'react';
import { PostType, CommentType } from "../types";
import Loading from './Loading';

type Props = {
  post: PostType,
  toggleComments: () => void;
  visible: boolean;
  comments: [];
}

const Post = ({
  post,
  toggleComments,
  visible,
  comments
}: Props) => {
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
      {visible ? (
        comments && comments.length ? comments.map((comment: CommentType) => (
          <div key={comment.id} className="bg-gray-200 pt-4">
            <div className="pl-8 pr-8 pb-5 text-grey-darkest">
              <div className="shadow-lg rounded-lg bg-white mx-auto p-4 notification-box">
                <div className="text-sm pb-2">{comment.name}</div>
                <div className="text-sm text-gray-600  tracking-tight ">{comment.body}</div>
              </div>
            </div>
          </div>
        )) : <Loading message="Loading comments" />
      ) : null}
    </div>
  )
}

export default Post;
