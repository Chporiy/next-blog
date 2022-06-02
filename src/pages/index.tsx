import type { GetStaticProps } from 'next'
import { ReactElement } from 'react'
import Layout from '../components/Layout'
import PostList from '../components/PostsList'
import { Post } from '../interfaces'
import { NextPageWithLayout } from './types'

type Props = {
  posts: Post[]
}

const Index: NextPageWithLayout<Props> = ({ posts }) => {
  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}

Index.getLayout = function getLayout(page : ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
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

export default Index
