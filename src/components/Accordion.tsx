import React from 'react';
import Post from './Post';
import { PostType } from '../types';

type Props = {
  post: PostType,
}

const Accordion = ({ post }: Props) => <Post post={post} />

export default Accordion;
