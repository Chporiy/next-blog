import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';

import { CommentsByPost } from '~/widgets/comment';
import { Header } from '~/widgets/header';

import { CreateCommentForm } from '~/features/comment';
import { PostAuthor } from '~/features/post';

import { PostImage, PostTitle, useGetPostQuery } from '~/entities/post';
import { useGetUsersQuery } from '~/entities/user';

import { ContentWrapper, Layout } from '~/shared/ui';

export const Page: AppProps['Component'] = () => {
  const router = useRouter();
  const postId = Number(router.query.id);
  const { data: post, isSuccess } = useGetPostQuery(postId);

  useGetUsersQuery();

  if (!isSuccess) return null;

  return (
    <ContentWrapper pb="8">
      <PostImage src={post.preview} alt={post.title} />
      <Flex pt="8" direction="column" gap="6">
        <Box px="12">
          <PostAuthor post={post} />
          <Box mt="3">
            <PostTitle>{post.title}</PostTitle>
          </Box>
          <Box mt="5">
            <Text>{post.body}</Text>
          </Box>
        </Box>
        <Divider />
        <Box px="12">
          <Heading as="h2" fontSize="2xl">
            Comments
          </Heading>
          <Flex mt="6" direction="column" gap="6">
            <CreateCommentForm postId={postId} />
            <CommentsByPost postId={postId} />
          </Flex>
        </Box>
      </Flex>
    </ContentWrapper>
  );
};

Page.getLayout = function getLayout(page) {
  return <Layout slots={{ header: <Header /> }}>{page}</Layout>;
};
