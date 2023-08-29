import { AppProps } from 'next/app';
import { ReactElement } from 'react';

import { Header } from '~/widgets/header';
import { AllPosts } from '~/widgets/post';

import { Layout } from '~/shared/ui';

export const HomePage: AppProps['Component'] = () => <AllPosts />;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout slots={{ header: <Header /> }}>{page}</Layout>;
};
