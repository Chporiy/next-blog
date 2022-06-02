import Head from 'next/head'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Next blog</title>
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout