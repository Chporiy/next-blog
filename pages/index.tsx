import { GetStaticProps } from 'next';

import { nextReduxWrapper } from '~/app';

import { HomePage } from '~/pages/home';

import { postApi } from '~/entities/post';
import { userApi } from '~/entities/user';

import { baseApiUtil } from '~/shared/api';

export default HomePage;

export const getStaticProps: GetStaticProps =
  nextReduxWrapper.getServerSideProps((store) => async () => {
    store.dispatch(postApi.endpoints.getPosts.initiate());
    store.dispatch(userApi.endpoints.getUsers.initiate());

    await Promise.all(store.dispatch(baseApiUtil.getRunningQueriesThunk()));

    return {
      props: {},
    };
  });
