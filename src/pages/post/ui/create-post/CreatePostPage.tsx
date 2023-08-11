import { Box, Heading } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { Header } from '~/widgets/header';

import { CreatePostForm } from '~/features/post';

import { ContentWrapper, Layout } from '~/shared/ui';

export const CreatePostPage: AppProps['Component'] = () => (
  <ContentWrapper p="12">
    <Heading>Create your post</Heading>
    <Box mt="6" w="full">
      <CreatePostForm />
    </Box>
  </ContentWrapper>
);

CreatePostPage.getLayout = (page) => (
  <Layout slots={{ header: <Header /> }}>{page}</Layout>
);
