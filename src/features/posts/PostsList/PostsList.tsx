import React from 'react';
import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';
import NextLink from '../../../components/links/NextLink';
import { Post } from '../types';

type Props = {
  posts: Post[];
};

const PostsList = ({ posts }: Props) => (
  <List spacing={4}>
    {posts.map(({ id, title, body }) => (
      <ListItem key={id}>
        <Box borderWidth="1px" borderRadius="md" p={5}>
          <Heading fontSize="xl">{title}</Heading>
          <Text mb={5} noOfLines={1}>
            {body}
          </Text>
          <NextLink href={`/posts/${id}`}>read more</NextLink>
        </Box>
      </ListItem>
    ))}
  </List>
);

export default PostsList;
