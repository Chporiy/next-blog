import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Layout from '../../components/Layout';
import { NextPageWithLayout } from '../types';

const SignUp: NextPageWithLayout = () => (
  <Flex
    mx="auto"
    p="8"
    maxW="xl"
    direction="column"
    align="center"
    justify="center"
    bg="white"
    borderRadius="md"
    shadow="xs"
    flex="1 auto"
  >
    <Heading>Welcome to Next blog</Heading>
  </Flex>
);

SignUp.getLayout = (page) => <Layout>{page}</Layout>;

export default SignUp;
