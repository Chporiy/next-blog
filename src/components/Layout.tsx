import Head from 'next/head';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>Next blog</title>
    </Head>
    <main>{children}</main>
  </>
);

export default Layout;
