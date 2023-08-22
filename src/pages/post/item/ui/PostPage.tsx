import { Box, Text } from '@chakra-ui/react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';

import { Header } from '~/widgets/header';

import { PostAuthor } from '~/features/post';

import { PostImage, PostTitle, useGetPostQuery } from '~/entities/post';
import { useGetUsersQuery } from '~/entities/user';

import { ContentWrapper, Layout } from '~/shared/ui';

export const Page: AppProps['Component'] = () => {
  const router = useRouter();
  useGetUsersQuery();

  const { data, isSuccess } = useGetPostQuery(
    typeof router.query.id === 'string' ? Number(router.query.id) : skipToken,
  );

  if (!isSuccess) return null;

  return (
    <ContentWrapper pb="8">
      <PostImage src={data.preview} alt={data.title} />
      <Box mt={8} px="12">
        <PostAuthor post={data} />
        <Box mt="3">
          <PostTitle>{data.title}</PostTitle>
        </Box>
        <Box mt="5">
          <Text>{data.body}</Text>
        </Box>
      </Box>
    </ContentWrapper>
  );
};

Page.getLayout = function getLayout(page) {
  return <Layout slots={{ header: <Header /> }}>{page}</Layout>;
};
