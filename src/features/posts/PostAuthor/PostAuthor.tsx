import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import getPostDate from '../../../utils/getPostDate/getPostDate';
import { selectUserById } from '../../users/selectors';
import { useGetUsersQuery } from '../../users/usersApi';
import { Post } from '../types';

type Props = Pick<Post, 'date' | 'userId'>;

/**
 * A component for display post`s user
 * Render user, avatar and post date if user is defined
 * Render error text and 'no user' avatar if iser is`nt defined
 */
const PostAuthor = ({ userId, date }: Props) => {
  const { user } = useGetUsersQuery(undefined, {
    selectFromResult: ({ data }) => ({
      user: selectUserById(data, userId),
    }),
  });

  return user ? (
    <Flex>
      <Avatar
        mr="3"
        src={user.avatar}
        name={`${user.firstName} ${user.lastName}`}
      />
      <Flex direction="column">
        <Text fontWeight="medium">
          {user.firstName} {user.lastName}
        </Text>
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
