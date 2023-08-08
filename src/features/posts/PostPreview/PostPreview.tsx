import React from 'react';
import NextLink from '../../../components/links/NextLink';
import PostAuthor from '../PostAuthor/PostAuthor';
import PostTitle from '../PostTitle/PostTitle';
import { Post } from '../types';
import ROUTES from '../../../utils/routes/routes';
import ContentWrapper from '../../../components/layout/ContentWrapper/ContentWrapper';

type Props = {
  post: Post;
};

const PostPreview = ({ post }: Props) => (
  <ContentWrapper p="4" alignItems="flex-start">
    <PostAuthor userId={post.userId} date={post.date} />
    <NextLink next={{ href: `${ROUTES.posts.id}/${post.id}` }}>
      <PostTitle marginTop="3">{post.title}</PostTitle>
    </NextLink>
  </ContentWrapper>
);

export default PostPreview;
