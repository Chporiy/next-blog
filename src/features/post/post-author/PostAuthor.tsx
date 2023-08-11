import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { Post } from '~/entities/post';
import { UserAvatar, UserFullname, useGetUserQuery } from '~/entities/user';

import { convertDateToLocalDate } from '~/shared/lib';

type Props = Pick<Post, 'date' | 'userId'>;

/**
 * A component for display post`s user
 * Render user, avatar and post date if user is defined
 * Render error text and 'no user' avatar if iser is`nt defined
 */
const PostAuthor = ({ userId, date }: Props) => {
  const { data: user } = useGetUserQuery(userId);

  return user ? (
    <Flex>
      <UserAvatar mr="3" user={user} />
      <Flex direction="column">
        <UserFullname user={user} fontWeight="medium" />
        <Text color="gray.400" fontSize="sm">
          {convertDateToLocalDate(date)}
        </Text>
      </Flex>
    </Flex>
  ) : (
    <Flex>
      <Avatar mr="3" />
      <Text fontWeight="medium">User not found</Text>
    </Flex>
  );
};

export default PostAuthor;
