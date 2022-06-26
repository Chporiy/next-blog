import { Container } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <Container maxW="container.xl">
    <Head>
      <title>Next blog</title>
    </Head>
    <main>{children}</main>
  </Container>
);

export default Layout;
