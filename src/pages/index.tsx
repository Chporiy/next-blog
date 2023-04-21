import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../app/store';
import Layout from '../components/Layout';
import PostForm from '../components/PostForm';
import PostList from '../features/posts/PostsList/PostsList';
import { getPosts, useGetPostsQuery } from '../features/posts/postsApi';
import { getUsers } from '../features/users/usersApi';
import { getRunningOperationPromises } from '../app/api/emptyApi';

const Index: AppProps['Component'] = () => {
  const { data: posts } = useGetPostsQuery();

  return (
    <div>
      {posts && <PostList posts={posts} />}
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
