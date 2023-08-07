import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { AppProps } from 'next/app';
import Layout from '../../components/layout/Layout';
import NextLink from '../../components/links/NextLink';
import SignInForm from '../../features/auth/SignInForm/SignInForm';
import ROUTES from '../../utils/routes/routes';
import ContentWrapper from '../../components/layout/ContentWrapper/ContentWrapper';

const SignIn: AppProps['Component'] = () => (
  <ContentWrapper maxWidth="2xl">
    <Heading>Sign in</Heading>
    <Box mt="6" w="full">
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

SignIn.getLayout = (page) => <Layout>{page}</Layout>;

export default SignIn;
