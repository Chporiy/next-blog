import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';

import { CommentList } from '~/widgets/comment';
import { Header } from '~/widgets/header';

import { PostAuthor } from '~/features/post';

import { useGetCommentsByPostQuery } from '~/entities/comment';
import { PostImage, PostTitle, useGetPostQuery } from '~/entities/post';
import { useGetUsersQuery } from '~/entities/user';

import { ContentWrapper, Layout } from '~/shared/ui';

export const Page: AppProps['Component'] = () => {
  const router = useRouter();
  useGetUsersQuery();

  const { data: post, isSuccess: isPostSuccessfulLoaded } = useGetPostQuery(
    typeof router.query.id === 'string' ? Number(router.query.id) : skipToken,
  );
  const { data: comments, isSuccess: isCommentsSuccessfulLoaded } =
    useGetCommentsByPostQuery(isPostSuccessfulLoaded ? post.id : skipToken);

  if (!isPostSuccessfulLoaded) return null;

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
          <Box mt="6">
            {isCommentsSuccessfulLoaded && <CommentList comments={comments} />}
          </Box>
        </Box>
      </Flex>
    </ContentWrapper>
  );
};

Page.getLayout = function getLayout(page) {
  return <Layout slots={{ header: <Header /> }}>{page}</Layout>;
};
