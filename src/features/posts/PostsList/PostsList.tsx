import React from 'react';
import { List, ListItem } from '@chakra-ui/react';
import { Post } from '../types';
import PostPreview from '../PostPreview/PostPreview';

type Props = {
  posts: Post[];
};

const PostsList = ({ posts }: Props) => (
  <List spacing={4}>
    {posts.map((post) => (
      <ListItem key={post.id}>
        <PostPreview post={post} />
      </ListItem>
    ))}
  </List>
);

export default PostsList;
