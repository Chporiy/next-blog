import { List as ChakraList, ListItem } from '@chakra-ui/react';
import React from 'react';

import { PostPreview } from '~/features/post';

import { Post } from '~/entities/post';

type Props = {
  posts: Post[];
};

export const List = ({ posts }: Props) => (
  <ChakraList spacing={4}>
    {posts.map((post) => (
      <ListItem key={post.id}>
        <PostPreview post={post} />
      </ListItem>
    ))}
  </ChakraList>
);
