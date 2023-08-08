import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { AppProps } from 'next/app';
import Layout from '../../components/layout/Layout';
import SignUpForm from '../../features/auth/SignUpForm/SignUpForm';
import NextLink from '../../components/links/NextLink';
import ROUTES from '../../utils/routes/routes';
import ContentWrapper from '../../components/layout/ContentWrapper/ContentWrapper';

const SignUp: AppProps['Component'] = () => (
  <ContentWrapper maxWidth="2xl" p="12">
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

SignUp.getLayout = (page) => <Layout>{page}</Layout>;

export default SignUp;
