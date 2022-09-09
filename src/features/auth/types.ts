import { User } from '../users/types';

export type SignUpResponse = {
  accessToken: string;
  user: Pick<User, 'id' | 'email'>;
};

export type SignUpRequest = Pick<User, 'email'> & {
  password: string;
};
