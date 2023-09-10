import jwtDecode, { JwtPayload } from 'jwt-decode';
import { useEffect, useState } from 'react';

import { useAppSelector } from '~/shared/lib';

import { useLazyGetUserQuery } from '../../../api/usersApi';
import { selectAccessToken } from '../selectors';

export const useCurrentUser = () => {
  const [decodedToken, setDecodedToken] = useState<JwtPayload | null>(null);
  const [getUser, { data: user }] = useLazyGetUserQuery();
  const accessToken = useAppSelector(selectAccessToken);

  useEffect(() => {
    if (accessToken) {
      setDecodedToken(jwtDecode(accessToken));
    }
  }, [accessToken]);

  useEffect(() => {
    if (decodedToken) {
      getUser(decodedToken.sub);
    }
  }, [getUser, decodedToken]);

  return user;
};
