import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import PostList from '../components/PostsList'
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
      <PostList posts={posts} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = (await response.json()).slice(0, 10);

  return {
    props: {
      posts
    }
  }
}

export default IndexPage
