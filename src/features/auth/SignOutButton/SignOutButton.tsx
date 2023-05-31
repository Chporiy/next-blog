import { Button } from '@chakra-ui/react';
import { useAppDispatch } from '../../../hooks/redux';
import { signOut } from '../authSlice';
import emptyApi from '../../../app/api/emptyApi';

const SignOutButton = () => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(signOut());
    dispatch(emptyApi.util.resetApiState());
  };

  return <Button onClick={onClick}>Sign out</Button>;
};

export default SignOutButton;
