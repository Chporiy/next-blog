import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { PostDate } from '~/entities/post';
import { UserAvatar, UserFullname, useGetUserQuery } from '~/entities/user';

import { Post } from '~/shared/model';

type Props = {
  post: Post;
};

/**
 * A component for display post`s user
 * Render user, avatar and post date if user is defined
 * Render error text and 'no user' avatar if iser is`nt defined
 */
export const Author = ({ post }: Props) => {
  const { data: user } = useGetUserQuery(post.userId);

  return user ? (
    <Flex>
      <UserAvatar mr="3" user={user} />
      <Flex direction="column">
        <UserFullname user={user} fontWeight="medium" />
        <PostDate post={post} />
      </Flex>
    </Flex>
  ) : (
    <Flex>
      <Avatar mr="3" />
      <Text fontWeight="medium">User not found</Text>
    </Flex>
  );
};
