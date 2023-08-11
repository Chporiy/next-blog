import { GetStaticProps } from 'next';

import { nextReduxWrapper } from '~/app';

import { HomePage } from '~/pages/home';

import { getPosts } from '~/entities/post';
import { getUsers } from '~/entities/user';

import { getRunningQueriesThunk } from '~/shared/api';

export default HomePage;

export const getStaticProps: GetStaticProps =
  nextReduxWrapper.getServerSideProps((store) => async () => {
    store.dispatch(getPosts.initiate());
    store.dispatch(getUsers.initiate());

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  });
