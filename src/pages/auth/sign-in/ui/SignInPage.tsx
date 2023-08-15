import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import React from 'react';

import { Header } from '~/widgets/header';

import { SignInForm } from '~/features/auth';

import { ROUTES } from '~/shared/config';
import { ContentWrapper, Layout, NextLink } from '~/shared/ui';

export const Page: AppProps['Component'] = () => (
  <ContentWrapper p="12" maxWidth="2xl" mx="auto">
    <Heading>Sign in</Heading>
    <Box mt="6" mx="auto" w="full">
      <SignInForm />
    </Box>
    <Divider mt="6" />
    <Text mt="4">
      Haven&apos;t an account?
      <NextLink
        next={{ href: ROUTES.auth.signUp }}
        chakra={{ color: 'teal.500' }}
      >
        {' '}
        Sign up
      </NextLink>
    </Text>
  </ContentWrapper>
);

Page.getLayout = (page) => (
  <Layout slots={{ header: <Header /> }}>{page}</Layout>
);
