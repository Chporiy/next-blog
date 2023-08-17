import { GetServerSideProps } from 'next';

import { nextReduxWrapper } from '~/app';

import { CreatePostPage } from '~/pages/post';

import { AuthGuard } from '~/features/auth';

export const getServerSideProps: GetServerSideProps =
  nextReduxWrapper.getServerSideProps((store) => async () => {
    const props = new AuthGuard(store).checkAccessToThePage();

    return props;
  });

export default CreatePostPage;
