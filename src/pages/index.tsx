import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { wrapper } from '../app/store';
import Layout from '../components/Layout';
import PostForm from '../components/PostForm';
import PostList from '../features/posts/PostsList/PostsList';
import { getPosts, useGetPostsQuery } from '../features/posts/postsApi';
import { NextPageWithLayout } from './types';
import { getUsers } from '../features/users/usersApi';
import { getRunningOperationPromises } from '../app/api/emptyApi';

const Index: NextPageWithLayout = () => {
  const { data } = useGetPostsQuery();

  return (
    <div>
      {data && <PostList posts={data} />}
      <PostForm />
    </div>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getPosts.initiate());
    store.dispatch(getUsers.initiate());

    await Promise.all(getRunningOperationPromises());

    return {
      props: {},
    };
  },
);

export default Index;
