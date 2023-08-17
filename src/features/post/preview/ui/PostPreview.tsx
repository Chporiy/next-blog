import React from 'react';

import { PostTitle } from '~/entities/post';

import { ROUTES } from '~/shared/config';
import { Post } from '~/shared/model';
import { ContentWrapper, NextLink } from '~/shared/ui';

import { PostAuthor } from '../../author';

type Props = {
  post: Post;
};

export const Preview = ({ post }: Props) => (
  <ContentWrapper p="4" alignItems="flex-start">
    <PostAuthor userId={post.userId} date={post.date} />
    <NextLink next={{ href: `${ROUTES.posts.id}/${post.id}` }}>
      <PostTitle marginTop="3">{post.title}</PostTitle>
    </NextLink>
  </ContentWrapper>
);
