import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { User } from '~/shared/model';

import { useGetUserQuery } from '../../api';
import { Avatar } from '../user-avatar/UserAvatar';
import { Fullname } from '../user-fullname/UserFullname';
import { UserNotFound } from '../user-not-found/UserNotFound';

interface Props extends Pick<User, 'id'> {
  slots: {
    date: ReactNode;
  };
}

/**
 * A component for display an author of any content
 */
export const Author = ({ id, slots: { date } }: Props) => {
  const { data: user } = useGetUserQuery(id);

  return user ? (
    <Flex>
      <Avatar mr="3" user={user} />
      <Flex direction="column">
        <Fullname user={user} fontWeight="medium" />
        {date}
      </Flex>
    </Flex>
  ) : (
    <UserNotFound />
  );
};
