import React from 'react';

import { PostTitle } from '~/entities/post';

import { ROUTES } from '~/shared/config';
import { Post } from '~/shared/model';
import { ContentWrapper, NextLink } from '~/shared/ui';

import { PostAuthor } from '../../author';

type Props = {
  post: Post;
};

export const Card = ({ post }: Props) => (
  <ContentWrapper p="4" alignItems="flex-start">
    <PostAuthor post={post} />
    <NextLink next={{ href: `${ROUTES.posts.id}/${post.id}` }}>
      <PostTitle marginTop="3">{post.title}</PostTitle>
    </NextLink>
  </ContentWrapper>
);
