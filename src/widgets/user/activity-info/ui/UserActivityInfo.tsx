import { Flex, Text } from '@chakra-ui/react';

import { PostIcon, useGetPostsByUserQuery } from '~/entities/post';
import { User } from '~/entities/user';

import { getPostAmount } from '../lib';

interface Props {
  userId: User['id'];
}

export const UserActivityInfo = ({ userId }: Props) => {
  const { data: posts, isSuccess } = useGetPostsByUserQuery(userId);

  if (!isSuccess) return null;

  const postAmount = getPostAmount(posts);

  return (
    <Flex alignItems="center" gap="2">
      <PostIcon />
      <Text>{postAmount} published posts</Text>
    </Flex>
  );
};
