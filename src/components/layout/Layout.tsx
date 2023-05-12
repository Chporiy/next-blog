import { Container } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Header from './header/Header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>Next blog</title>
    </Head>
    <Header />
    <Container as="main" maxW="container.xl" mt="20">
      {children}
    </Container>
  </>
);

export default Layout;
