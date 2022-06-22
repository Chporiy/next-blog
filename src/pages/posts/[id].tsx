import { skipToken } from '@reduxjs/toolkit/dist/query';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { makeStore, wrapper } from '../../app/store';
import Layout from '../../components/Layout';
import {
  getPost,
  getPosts,
  getRunningOperationPromises,
  useGetPostQuery,
} from '../../features/posts/postsApi';
import { NextPageWithLayout } from '../types';

const PostPage: NextPageWithLayout = () => {
  const router = useRouter();

  const { data } = useGetPostQuery(
    typeof router.query.id === 'string' ? router.query.id : skipToken,
  );

  return (
    <article>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </article>
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
        store.dispatch(getPost.initiate(params.id));
      }

      await Promise.all(getRunningOperationPromises());

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
