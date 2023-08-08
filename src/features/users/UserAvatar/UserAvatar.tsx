import { Avatar, AvatarProps } from '@chakra-ui/react';
import { User } from '../types';

import NextLink from '../../../components/links/NextLink';
import ROUTES from '../../../utils/routes/routes';

interface Props extends Omit<AvatarProps, 'src' | 'name'> {
  user: User;
}

const UserAvatar = ({ user, ...rest }: Props) => (
  <NextLink next={{ href: `${ROUTES.users.id}/${user.id}` }}>
    <Avatar src={user.avatar} name={user.fullName} {...rest} />
  </NextLink>
);

export default UserAvatar;
