import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import NextLink from '../../../components/links/NextLink';
import PostAuthor from '../PostAuthor/PostAuthor';
import PostTitle from '../PostTitle/PostTitle';
import { Post } from '../types';

type Props = {
  post: Post;
};

const PostPreview = ({ post }: Props) => (
  <Box borderWidth="1px" borderRadius="md" p={5}>
    <PostAuthor userId={post.userId} date={post.date} />
    <PostTitle>{post.title}</PostTitle>
    <Text mb={5} mt={5} noOfLines={1}>
      {post.body}
    </Text>
    <NextLink href={`/posts/${post.id}`}>read more</NextLink>
  </Box>
);

export default PostPreview;
