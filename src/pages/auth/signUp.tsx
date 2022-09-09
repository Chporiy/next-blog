import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import SignUpForm from '../../features/auth/SIgnUpForm/SignUpForm';
import Layout from '../../components/Layout';
import { NextPageWithLayout } from '../types';

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
  </Flex>
);

SignUp.getLayout = (page) => <Layout>{page}</Layout>;

export default SignUp;
