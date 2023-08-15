import { GetStaticPaths, GetStaticProps } from 'next';

import { nextReduxWrapper, rootReducer } from '~/app';

import { PostPage } from '~/pages/post';

import { postApi } from '~/entities/post';
import { userApi } from '~/entities/user';

import { baseApiUtil } from '~/shared/api';
import { makeStore } from '~/shared/lib';

export default PostPage;

export const getStaticProps: GetStaticProps = nextReduxWrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      if (typeof params.id === 'string') {
        store.dispatch(postApi.endpoints.getPost.initiate(Number(params.id)));
        store.dispatch(userApi.endpoints.getUsers.initiate());
      }

      await Promise.all(store.dispatch(baseApiUtil.getRunningQueriesThunk()));

      return {
        props: {},
      };
    },
);

export const getStaticPaths: GetStaticPaths = async () => {
  const store = makeStore(rootReducer);
  const { data } = await store.dispatch(
    postApi.endpoints.getPosts.initiate(null),
  );
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
