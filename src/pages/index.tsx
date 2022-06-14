import type { GetStaticProps } from "next";
import { ReactElement } from "react";
import Layout from "../components/Layout";
import PostForm from "../components/PostForm";
import PostList from "../components/PostsList";
import { Post } from "../interfaces";
import { NextPageWithLayout } from "./types";

type Props = {
  posts: Post[];
};

const Index: NextPageWithLayout<Props> = ({ posts }) => {
  return (
    <div>
      <PostList posts={posts} />
      <PostForm />
    </div>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const posts: Post[] = await response.json();

  return {
    props: {
      posts,
    },
  };
};

export default Index;
