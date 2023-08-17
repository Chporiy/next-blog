import { Button as ChakraButton } from '@chakra-ui/react';

import { authModel } from '~/entities/auth';

import { baseApiUtil } from '~/shared/api';
import { useAppDispatch } from '~/shared/lib';

export const Button = () => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(authModel.actions.signOut());
    dispatch(baseApiUtil.resetApiState());
  };

  return <ChakraButton onClick={onClick}>Sign out</ChakraButton>;
};
