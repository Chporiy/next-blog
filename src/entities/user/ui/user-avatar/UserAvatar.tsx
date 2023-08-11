import { Avatar, AvatarProps } from '@chakra-ui/react';

import { ROUTES } from '~/shared/config';
import { NextLink } from '~/shared/ui';

import { User } from '../../model/types';

interface Props extends Omit<AvatarProps, 'src' | 'name'> {
  user: User;
}

const UserAvatar = ({ user, ...rest }: Props) => (
  <NextLink next={{ href: `${ROUTES.users.id}/${user.id}` }}>
    <Avatar src={user.avatar} name={user.fullName} {...rest} />
  </NextLink>
);

export default UserAvatar;
