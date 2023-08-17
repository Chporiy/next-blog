import { Text, TextProps } from '@chakra-ui/react';

import { ROUTES } from '~/shared/config';
import { User } from '~/shared/model';
import { NextLink } from '~/shared/ui';

interface Props extends TextProps {
  user: User;
}

export const Fullname = ({ user, ...rest }: Props) => (
  <NextLink next={{ href: `${ROUTES.users.id}/${user.id}` }}>
    <Text {...rest}>{user.fullName}</Text>
  </NextLink>
);
