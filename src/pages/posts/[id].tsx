import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Layout from "../../components/Layout";
import { Post } from "../../interfaces";
import { NextPageWithLayout } from "../types";

type Props = {
  post: Post;
};

const Post: NextPageWithLayout<Props> = ({ post }) => {
  return (
    <article>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </article>
  );
};

Post.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${params.id}`
  );
  const post: Post = await response.json();

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const posts: Post[] = await response.json();
  const paths = posts.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
