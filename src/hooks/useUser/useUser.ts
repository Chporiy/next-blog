import jwtDecode, { JwtPayload } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { selectAccessToken } from '../../features/auth/authSlice';
import { useAppSelector } from '../redux';
import { useLazyGetUserByIdQuery } from '../../features/users/usersApi';

const useUser = () => {
  const [decodedToken, setDecodedToken] = useState<JwtPayload | null>(null);
  const [getUser, { data: user }] = useLazyGetUserByIdQuery();
  const accessToken = useAppSelector(selectAccessToken);

  useEffect(() => {
    if (accessToken) {
      setDecodedToken(jwtDecode(accessToken));
    }
  }, [accessToken]);

  useEffect(() => {
    if (decodedToken) {
      getUser({ id: Number(decodedToken.sub) });
    }
  }, [getUser, decodedToken]);

  return user;
};

export default useUser;
