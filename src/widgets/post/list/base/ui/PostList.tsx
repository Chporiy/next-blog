import React from 'react';

import { PostCard } from '~/features/post';

import { Post } from '~/shared/model';
import { List } from '~/shared/ui';

type Props = {
  posts: Post[];
};

export const PostList = ({ posts }: Props) => (
  <List items={posts}>{(post) => <PostCard post={post} />}</List>
);
