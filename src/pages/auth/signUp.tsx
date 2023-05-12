import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { AppProps } from 'next/app';
import Layout from '../../components/Layout';
import SignUpForm from '../../features/auth/SignUpForm/SignUpForm';
import NextLink from '../../components/links/NextLink';
import ROUTES from '../../utils/routes/routes';

const SignUp: AppProps['Component'] = () => (
  <Flex
    mx="auto"
    p="12"
    maxW="2xl"
    direction="column"
    align="center"
    justify="center"
    bg="white"
    borderRadius="md"
    shadow="xs"
    flex="1 auto"
  >
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
  </Flex>
);

SignUp.getLayout = (page) => <Layout>{page}</Layout>;

export default SignUp;
