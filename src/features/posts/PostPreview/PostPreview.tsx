import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import NextLink from '../../../components/links/NextLink';
import getPostDate from '../../../utils/getPostDate/getPostDate';
import { Post } from '../types';

type Props = {
  post: Post;
};

const PostPreview = ({ post }: Props) => (
  <Box borderWidth="1px" borderRadius="md" p={5}>
    <Heading fontSize="xl">{post.title}</Heading>
    <Text color="gray.400" fontSize="sm">
      {getPostDate(post.date)}
    </Text>
    <Text mb={5} mt={5} noOfLines={1}>
      {post.body}
    </Text>
    <NextLink href={`/posts/${post.id}`}>read more</NextLink>
  </Box>
);

export default PostPreview;
