import { HStack, Text } from '@chakra-ui/react';
import useUser from '../../../hooks/useUser/useUser';
import SignOutButton from '../../../features/auth/SignOutButton/SignOutButton';
import CreatePostButton from '../../../features/posts/CreatePostButton/CreatePostButton';
import NextLink from '../../links/NextLink';
import ROUTES from '../../../utils/routes/routes';

const UserPanel = () => {
  const user = useUser();

  if (!user) return null;

  return (
    <HStack spacing={4}>
      <CreatePostButton />
      <NextLink next={{ href: `${ROUTES.users.id}/${user.id}` }}>
        <Text>{user.email}</Text>
      </NextLink>
      <SignOutButton />
    </HStack>
  );
};

export default UserPanel;
