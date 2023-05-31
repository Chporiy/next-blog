import { Button } from '@chakra-ui/react';
import { useAppDispatch } from '../../../hooks/redux';
import { signOut } from '../authSlice';

const SignOutButton = () => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(signOut());
  };

  return <Button onClick={onClick}>Sign out</Button>;
};

export default SignOutButton;
