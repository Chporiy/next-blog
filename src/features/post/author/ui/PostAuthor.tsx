import React from 'react';

import { PostDate } from '~/entities/post';
import { Author as EntityAuthor } from '~/entities/user';

import { Post } from '~/shared/model';

type Props = {
  post: Post;
};

/**
 * A component for display post author
 * @param {Props} props
 * @param {Post} props.post
 * @returns {ReactElement}
 */
export const Author = ({ post }: Props) => (
  <EntityAuthor id={post.userId} slots={{ date: <PostDate post={post} /> }} />
);
