import { Flex, Text } from '@chakra-ui/react';
import PostIcon from '../../posts/PostIcon/PostIcon';
import { User } from '../types';
import { useGetUserPostsQuery } from '../usersApi';

interface Props {
  userId: User['id'];
}

const UserActivityInfo = ({ userId }: Props) => {
  const { data: posts, isSuccess } = useGetUserPostsQuery(userId);

  if (!isSuccess) return null;

  const postAmount = posts.length;

  return (
    <Flex alignItems="center" gap="2">
      <PostIcon />
      <Text>{postAmount} published posts</Text>
    </Flex>
  );
};

export default UserActivityInfo;
