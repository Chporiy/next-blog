import { Button } from '@chakra-ui/react';

import { resetApiState } from '~/shared/api';
import { useAppDispatch } from '~/shared/lib';

import { signOut } from '../../api/authSlice';

const SignOutButton = () => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(signOut());
    dispatch(resetApiState());
  };

  return <Button onClick={onClick}>Sign out</Button>;
};

export default SignOutButton;
