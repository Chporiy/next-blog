import { Avatar, AvatarProps } from '@chakra-ui/react';
import { User } from '../types';

interface Props extends Omit<AvatarProps, 'src' | 'name'> {
  user: User;
}

const UserAvatar = ({ user, ...rest }: Props) => (
  <Avatar src={user.avatar} name={user.fullName} {...rest} />
);

export default UserAvatar;
