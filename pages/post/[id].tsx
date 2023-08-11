import { GetStaticPaths, GetStaticProps } from 'next';

import { nextReduxWrapper, rootReducer } from '~/app';

import { PostPage } from '~/pages/post';

import { getPost, getPosts } from '~/entities/post';
import { getUsers } from '~/entities/user';

import { getRunningQueriesThunk } from '~/shared/api';
import { makeStore } from '~/shared/lib';

export default PostPage;

export const getStaticProps: GetStaticProps = nextReduxWrapper.getStaticProps(
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
  const store = makeStore(rootReducer);
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
