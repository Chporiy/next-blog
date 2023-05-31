import { HStack, Text } from '@chakra-ui/react';
import useUser from '../../../hooks/useUser/useUser';
import SignOutButton from '../../../features/auth/SignOutButton/SignOutButton';

const UserPanel = () => {
  const user = useUser();

  if (!user) return null;

  return (
    <HStack spacing={4}>
      <Text>{user.email}</Text>
      <SignOutButton />
    </HStack>
  );
};

export default UserPanel;
