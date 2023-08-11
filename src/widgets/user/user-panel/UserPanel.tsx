import { HStack, Text } from '@chakra-ui/react';

import { SignOutButton } from '~/entities/auth';
import { CreatePostButton } from '~/entities/post';
import { useUser } from '~/entities/user';

import { ROUTES } from '~/shared/config';
import { NextLink } from '~/shared/ui';

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
