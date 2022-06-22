import React from 'react';
import { Post } from '../features/posts/types';
import NextLink from './links/NextLink';

type Props = {
  posts: Post[];
};

const PostsList = ({ posts }: Props) => (
  <ul>
    {posts.map(({ id, title }) => (
      <li key={id}>
        <NextLink href={`/posts/${id}`}>{title}</NextLink>
      </li>
    ))}
  </ul>
);

export default PostsList;
