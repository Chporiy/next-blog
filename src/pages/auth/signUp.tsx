import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import SignUpForm from '../../features/auth/SignUpForm/SignUpForm';
import Layout from '../../components/Layout';
import { NextPageWithLayout } from '../types';
import NextLink from '../../components/links/NextLink';

const SignUp: NextPageWithLayout = () => (
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
      <NextLink next={{ href: '/auth/signIn' }} chakra={{ color: 'teal.500' }}>
        {' '}
        Sign in
      </NextLink>
    </Text>
  </Flex>
);

SignUp.getLayout = (page) => <Layout>{page}</Layout>;

export default SignUp;
