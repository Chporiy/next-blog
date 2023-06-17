import { HStack, Text } from '@chakra-ui/react';
import useUser from '../../../hooks/useUser/useUser';
import SignOutButton from '../../../features/auth/SignOutButton/SignOutButton';
import CreatePostButton from '../../../features/posts/CreatePostButton/CreatePostButton';

const UserPanel = () => {
  const user = useUser();

  if (!user) return null;

  return (
    <HStack spacing={4}>
      <CreatePostButton />
      <Text>{user.email}</Text>
      <SignOutButton />
    </HStack>
  );
};

export default UserPanel;
