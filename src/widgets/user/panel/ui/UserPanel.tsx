import { HStack, Text } from '@chakra-ui/react';

import { SignOutButton } from '~/features/auth';

import { CreatePostButton } from '~/entities/post';
import { userModel } from '~/entities/user';

import { ROUTES } from '~/shared/config';
import { NextLink } from '~/shared/ui';

export const UserPanel = () => {
  const user = userModel.selectors.useCurrentUser();

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
