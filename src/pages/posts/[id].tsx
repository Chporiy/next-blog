import { Box, Text } from '@chakra-ui/react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { GetStaticPaths, GetStaticProps } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import { getRunningQueriesThunk } from '../../app/api/emptyApi';
import { makeStore, wrapper } from '../../app/store';
import Layout from '../../components/layout/Layout';
import PostAuthor from '../../features/posts/PostAuthor/PostAuthor';
import {
  getPost,
  getPosts,
  useGetPostQuery,
} from '../../features/posts/postsApi';
import PostTitle from '../../features/posts/PostTitle/PostTitle';
import { getUsers, useGetUsersQuery } from '../../features/users/usersApi';
import PostImage from '../../features/posts/PostImage/PostImage';
import ContentWrapper from '../../components/layout/ContentWrapper/ContentWrapper';

const PostPage: AppProps['Component'] = () => {
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
        <PostAuthor userId={data.userId} date={data.date} />
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

PostPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default PostPage;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      if (typeof params.id === 'string') {
        store.dispatch(getPost.initiate(Number(params.id)));
        store.dispatch(getUsers.initiate());
      }

      await Promise.all(store.dispatch(getRunningQueriesThunk()));

      return {
        props: {},
      };
    },
);

export const getStaticPaths: GetStaticPaths = async () => {
  const store = makeStore();
  const { data } = await store.dispatch(getPosts.initiate(null));
  const paths = data.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
