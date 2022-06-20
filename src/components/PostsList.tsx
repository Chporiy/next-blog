import React from 'react';
import { IPost } from '../interfaces';
import NextLink from './links/NextLink';

type Props = {
  posts: IPost[];
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
