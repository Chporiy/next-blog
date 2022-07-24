import { Box } from '@chakra-ui/react';
import React from 'react';
import NextLink from '../../../components/links/NextLink';
import PostAuthor from '../PostAuthor/PostAuthor';
import PostTitle from '../PostTitle/PostTitle';
import { Post } from '../types';

type Props = {
  post: Post;
};

const PostPreview = ({ post }: Props) => (
  <Box p={5} borderWidth="1px" borderRadius="md" bg="white" shadow="xs">
    <PostAuthor userId={post.userId} date={post.date} />
    <NextLink href={`/posts/${post.id}`}>
      <PostTitle marginTop="3">{post.title}</PostTitle>
    </NextLink>
  </Box>
);

export default PostPreview;
