import { Text, TextProps } from '@chakra-ui/react';
import { User } from '../types';

interface Props extends TextProps {
  user: User;
}

const UserFullname = ({ user, ...rest }: Props) => (
  <Text {...rest}>{user.fullName}</Text>
);

export default UserFullname;
