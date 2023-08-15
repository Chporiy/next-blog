import { Container } from '@chakra-ui/react';
import Head from 'next/head';
import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  slots: {
    header: ReactNode;
  };
};

export const Layout = ({
  children,
  slots: { header },
}: PropsWithChildren<Props>) => (
  <>
    <Head>
      <title>Next blog</title>
    </Head>
    {header}
    <Container as="main" maxW="container.xl" mt="20">
      {children}
    </Container>
  </>
);
