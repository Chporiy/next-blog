import { GetStaticPaths, GetStaticProps } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Box, Flex } from '@chakra-ui/react';
import { makeStore, wrapper } from '../../app/store';
import {
  getUserPosts,
  getUsers,
  useGetUserQuery,
} from '../../features/users/usersApi';
import { getRunningQueriesThunk } from '../../app/api/emptyApi';
import Layout from '../../components/layout/Layout';
import ContentWrapper from '../../components/layout/ContentWrapper/ContentWrapper';
import UserAvatar from '../../features/users/UserAvatar/UserAvatar';
import UserFullname from '../../features/users/UserFullname/UserFullname';
import UserPosts from '../../features/users/UserPosts/UserPosts';
import UserActivityInfo from '../../features/users/UserActivityInfo/UserActivityInfo';

const UserPage: AppProps['Component'] = () => {
  const router = useRouter();

  const { data: user, isSuccess } = useGetUserQuery(Number(router.query.id));

  if (!isSuccess) return null;

  return (
    <>
      <ContentWrapper p="12">
        <UserAvatar user={user} size="2xl" />
        <UserFullname user={user} mt="4" fontWeight="bold" fontSize="4xl" />
      </ContentWrapper>
      <Flex mt="4" gap="4" justifyContent="space-between">
        <ContentWrapper
          p="4"
          width="full"
          maxWidth="2xs"
          height="max-content"
          alignItems="flex-start"
        >
          <UserActivityInfo userId={user.id} />
        </ContentWrapper>
        <Box width="full">
          <UserPosts userId={user.id} />
        </Box>
      </Flex>
    </>
  );
};

UserPage.getLayout = (page) => <Layout>{page}</Layout>;

export default UserPage;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      if (typeof params.id === 'string') {
        store.dispatch(getUserPosts.initiate(Number(params.id)));
        store.dispatch(getUsers.initiate());
      }

      await Promise.all(store.dispatch(getRunningQueriesThunk()));

      return {
        props: {},
      };
    },
);

export const getStaticPaths: GetStaticPaths = async () => {
  const store = makeStore();
  const { data } = await store.dispatch(getUsers.initiate());
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
