import { GetStaticProps } from 'next';
import { ReactElement, useMemo } from 'react';
import { AppProps } from 'next/app';
import { createSelector } from '@reduxjs/toolkit';
import { wrapper } from '../app/store';
import Layout from '../components/layout/Layout';
import PostList from '../features/posts/PostsList/PostsList';
import { getPosts, useGetPostsQuery } from '../features/posts/postsApi';
import { getUsers } from '../features/users/usersApi';
import { getRunningQueriesThunk } from '../app/api/emptyApi';
import { Post } from '../features/posts/types';

const Index: AppProps['Component'] = () => {
  const sortPostsByDate = useMemo(() => {
    const emptyArray = [];

    return createSelector(
      (result) => result.data,
      (data: Post[]) =>
        [...data]?.sort((a, b) => (a.date > b.date ? -1 : 1)) ?? emptyArray,
    );
  }, []);

  const { data: posts } = useGetPostsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: sortPostsByDate(result),
    }),
  });

  return <div>{posts && <PostList posts={posts} />}</div>;
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getPosts.initiate());
    store.dispatch(getUsers.initiate());

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  },
);

export default Index;
