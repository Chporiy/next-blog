import { Button } from '@chakra-ui/react';

import { baseApiUtil } from '~/shared/api';
import { useAppDispatch } from '~/shared/lib';

import { actions } from '../../model';

export const SignOutButton = () => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(actions.signOut());
    dispatch(baseApiUtil.resetApiState());
  };

  return <Button onClick={onClick}>Sign out</Button>;
};
