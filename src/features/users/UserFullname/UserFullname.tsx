import { Text, TextProps } from '@chakra-ui/react';
import { User } from '../types';
import NextLink from '../../../components/links/NextLink';
import ROUTES from '../../../utils/routes/routes';

interface Props extends TextProps {
  user: User;
}

const UserFullname = ({ user, ...rest }: Props) => (
  <NextLink next={{ href: `${ROUTES.users.id}/${user.id}` }}>
    <Text {...rest}>{user.fullName}</Text>
  </NextLink>
);

export default UserFullname;
