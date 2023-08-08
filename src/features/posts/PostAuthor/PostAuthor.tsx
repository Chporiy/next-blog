import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import getPostDate from '../../../utils/getPostDate/getPostDate';
import { useGetUserQuery } from '../../users/usersApi';
import { Post } from '../types';
import UserAvatar from '../../users/UserAvatar/UserAvatar';
import UserFullname from '../../users/UserFullname/UserFullname';

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
          {getPostDate(date)}
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
