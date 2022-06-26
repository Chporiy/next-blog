import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { wrapper } from '../app/store';
import Layout from '../components/Layout';
import PostForm from '../components/PostForm';
import PostList from '../features/posts/PostsList/PostsList';
import {
  getPosts,
  getRunningOperationPromises,
  useGetPostsQuery,
} from '../features/posts/postsApi';
import { NextPageWithLayout } from './types';

const Index: NextPageWithLayout = () => {
  const { data } = useGetPostsQuery(null);
  return (
    <div>
      {data ? <PostList posts={data} /> : null}
      <PostForm />
    </div>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getPosts.initiate(null));

    await Promise.all(getRunningOperationPromises());

    return {
      props: {},
    };
  },
);

export default Index;
