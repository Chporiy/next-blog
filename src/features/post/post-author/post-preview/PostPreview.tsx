import React from 'react';

import { Post, PostTitle } from '~/entities/post';

import { ROUTES } from '~/shared/config';
import { ContentWrapper, NextLink } from '~/shared/ui';

import PostAuthor from '../PostAuthor';

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
