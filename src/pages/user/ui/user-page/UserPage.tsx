import { Box, Flex } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { Header } from '~/widgets/header';
import { PostsByUser } from '~/widgets/post';
import { UserActivityInfo } from '~/widgets/user';

import { UserAvatar, UserFullname, useGetUserQuery } from '~/entities/user';

import { ContentWrapper, Layout } from '~/shared/ui';

export const UserPage: AppProps['Component'] = () => {
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
          <PostsByUser userId={user.id} />
        </Box>
      </Flex>
    </>
  );
};

UserPage.getLayout = (page) => (
  <Layout slots={{ header: <Header /> }}>{page}</Layout>
);
