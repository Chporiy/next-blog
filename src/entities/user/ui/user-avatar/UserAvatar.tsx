import { Avatar as ChakraAvatar, AvatarProps } from '@chakra-ui/react';

import { ROUTES } from '~/shared/config';
import { User } from '~/shared/model';
import { NextLink } from '~/shared/ui';

interface Props extends Omit<AvatarProps, 'src' | 'name'> {
  user: User;
}

export const Avatar = ({ user, ...rest }: Props) => (
  <NextLink next={{ href: `${ROUTES.users.id}/${user.id}` }}>
    <ChakraAvatar src={user.avatar} name={user.fullName} {...rest} />
  </NextLink>
);
