import { AppProps } from 'next/app';
import { ReactElement } from 'react';

import { Header } from '~/widgets/header';
import { PostList } from '~/widgets/post';

import { sortPostsByDescDate, useGetPostsQuery } from '~/entities/post';

import { Layout } from '~/shared/ui';

export const HomePage: AppProps['Component'] = () => {
  const { data: posts } = useGetPostsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: sortPostsByDescDate(result),
    }),
  });

  return <div>{posts && <PostList posts={posts} />}</div>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout slots={{ header: <Header /> }}>{page}</Layout>;
};
