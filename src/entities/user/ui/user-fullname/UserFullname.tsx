import { Text, TextProps } from '@chakra-ui/react';

import { ROUTES } from '~/shared/config';
import { NextLink } from '~/shared/ui';

import { User } from '../../model/types';

interface Props extends TextProps {
  user: User;
}

const UserFullname = ({ user, ...rest }: Props) => (
  <NextLink next={{ href: `${ROUTES.users.id}/${user.id}` }}>
    <Text {...rest}>{user.fullName}</Text>
  </NextLink>
);

export default UserFullname;
