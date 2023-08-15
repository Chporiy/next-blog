import { GetStaticPaths, GetStaticProps } from 'next';

import { nextReduxWrapper, rootReducer } from '~/app';

import { UserPage } from '~/pages/user';

import { postApi } from '~/entities/post';
import { userApi } from '~/entities/user';

import { baseApiUtil } from '~/shared/api';
import { makeStore } from '~/shared/lib';

export default UserPage;

export const getStaticProps: GetStaticProps = nextReduxWrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      if (typeof params.id === 'string') {
        store.dispatch(
          postApi.endpoints.getPostsByUser.initiate(Number(params.id)),
        );
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
  const { data } = await store.dispatch(userApi.endpoints.getUsers.initiate());
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
