import { Avatar as ChakraAvatar, AvatarProps } from '@chakra-ui/react';

import { ROUTES } from '~/shared/config';
import { NextLink } from '~/shared/ui';

import { User } from '../../model/types';

interface Props extends Omit<AvatarProps, 'src' | 'name'> {
  user: User;
}

export const Avatar = ({ user, ...rest }: Props) => (
  <NextLink next={{ href: `${ROUTES.users.id}/${user.id}` }}>
    <ChakraAvatar src={user.avatar} name={user.fullName} {...rest} />
  </NextLink>
);
