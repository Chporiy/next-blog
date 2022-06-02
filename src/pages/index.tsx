import type { NextPage } from 'next'
import Head from 'next/head'
import { Post } from '../interfaces'

type Props = {
  posts: Post[]
}

const IndexPage: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Next blog</title>
      </Head>
    </div>
  )
}

export default IndexPage
