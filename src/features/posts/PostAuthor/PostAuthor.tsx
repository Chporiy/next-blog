import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useAppSelector } from '../../../hooks/redux';
import getPostDate from '../../../utils/getPostDate/getPostDate';
import { selectUserById } from '../../users/usersApi';
import { Post } from '../types';

type Props = Pick<Post, 'date' | 'userId'>;

const PostAuthor = ({ userId, date }: Props) => {
  const user = useAppSelector((state) => selectUserById(state, userId));

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
