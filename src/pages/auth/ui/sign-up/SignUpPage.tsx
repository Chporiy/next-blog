import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import React from 'react';

import { Header } from '~/widgets/header';

import { SignUpForm } from '~/features/auth';

import { ROUTES } from '~/shared/config';
import { ContentWrapper, Layout, NextLink } from '~/shared/ui';

export const SignUpPage: AppProps['Component'] = () => (
  <ContentWrapper p="12" maxWidth="2xl" mx="auto">
    <Heading>Welcome to Next blog</Heading>
    <Box mt="6" w="full">
      <SignUpForm />
    </Box>
    <Divider mt="6" />
    <Text mt="4">
      Have an account?
      <NextLink
        next={{ href: ROUTES.auth.signIn }}
        chakra={{ color: 'teal.500' }}
      >
        {' '}
        Sign in
      </NextLink>
    </Text>
  </ContentWrapper>
);

SignUpPage.getLayout = (page) => (
  <Layout slots={{ header: <Header /> }}>{page}</Layout>
);
