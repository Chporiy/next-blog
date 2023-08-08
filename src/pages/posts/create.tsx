import { AppProps } from 'next/app';
import { Box, Heading } from '@chakra-ui/react';
import Layout from '../../components/layout/Layout';
import CreatePostForm from '../../features/posts/CreatePostForm/CreatePostForm';
import ContentWrapper from '../../components/layout/ContentWrapper/ContentWrapper';

const CreatePost: AppProps['Component'] = () => (
  <ContentWrapper p="12">
    <Heading>Create your post</Heading>
    <Box mt="6" w="full">
      <CreatePostForm />
    </Box>
  </ContentWrapper>
);

CreatePost.getLayout = (page) => <Layout>{page}</Layout>;

export default CreatePost;
