import Link from 'next/link';
import React from 'react';
import { Post } from '../interfaces'

type Props = {
  posts: Post[]
}

const PostsList = ({ posts }: Props) => {
  return (
    <ul>
      {
        posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))
      }
    </ul>
    
  )
}

export default PostsList