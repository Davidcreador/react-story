import React from 'react';
import { PostType } from "../types";
import Loading from './Loading';
import Accordion from './Accordion';

type Props = {
  post: PostType,
  fetchCommentsByPostId: (id: number) => void;
  visible: boolean;
  comments: [];
}

const Post = ({
  post,
  fetchCommentsByPostId,
  visible,
  comments
}: Props) => {
  return (
    <article data-id={post.id} className="border-b" onClick={() => fetchCommentsByPostId(post.id)}>
      <div className={`${visible ? "border-l-2 bg-grey-lightest border-indigo-500" : "border-l-2 border-transparent"}`}>
        <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
          <span className={`${visible ? "text-indigo-500" : "text-grey-darkest"} font-thin text-xl`}>{post.title}</span>

          {visible ?
            (
              comments && comments.length ? (
                <div className="rounded-full border border border-indigo-500 w-7 h-7 flex items-center justify-center bg-indigo-500">
                  <svg aria-hidden="true" data-reactid="281" fill="none" height="24" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="18 15 12 9 6 15">
                    </polyline>
                  </svg>
                </div>) : <Loading message="Loading messages" />
            ) : (
              <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="6 9 12 15 18 9">
                  </polyline>
                </svg>
              </div>
            )}

        </header>
        {visible ? (<Accordion />) : null}
      </div>
    </article>
  )
}

export default Post;
