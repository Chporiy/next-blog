import { Flex, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { CommentsByUser } from '~/widgets/comment';
import { Header } from '~/widgets/header';
import { PostsByUser } from '~/widgets/post';
import { UserActivityInfo } from '~/widgets/user';

import { UserAvatar, UserFullname, useGetUserQuery } from '~/entities/user';

import { ContentWrapper, Layout } from '~/shared/ui';

export const Page: AppProps['Component'] = () => {
  const router = useRouter();
  const userId = String(router.query.id);
  const { data: user, isSuccess } = useGetUserQuery(userId);

  if (!isSuccess) return null;

  return (
    <>
      <ContentWrapper p="12">
        <UserAvatar user={user} size="2xl" />
        <UserFullname user={user} mt="4" fontWeight="bold" fontSize="4xl" />
      </ContentWrapper>
      <Flex
        as={Tabs}
        isLazy
        colorScheme="teal"
        orientation="vertical"
        mt="4"
        gap="4"
        justifyContent="space-between"
      >
        <ContentWrapper
          p="4"
          width="full"
          maxWidth="2xs"
          height="max-content"
          alignItems="flex-start"
        >
          <UserActivityInfo userId={user.id} />
        </ContentWrapper>
        <TabPanels width="full">
          <TabPanel p="0">
            <PostsByUser userId={user.id} />
          </TabPanel>
          <TabPanel p="0">
            <CommentsByUser userId={user.id} />
          </TabPanel>
        </TabPanels>
      </Flex>
    </>
  );
};

Page.getLayout = (page) => (
  <Layout slots={{ header: <Header /> }}>{page}</Layout>
);
