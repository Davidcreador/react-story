import React, { useState, useEffect } from 'react';
import Post from './Post';
import { PostType } from '../types';

type Props = {
  post: PostType,
  fetchCommentsByPostId: (id: number) => void;
  comments: [];
}

const Accordion = ({
  post,
  fetchCommentsByPostId,
  comments
}: Props) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!visible) return
    fetchCommentsByPostId(post.id);
  }, [visible])

  const toggleComments = () => {
    setVisible(!visible);
  }

  return (
    <>
      <Post
        visible={visible}
        post={post}
        comments={comments}
        toggleComments={toggleComments}
      />
    </>
  )
}

export default Accordion;
