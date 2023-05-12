import { User } from '../users/types';

export type SignUpResponse = {
  accessToken: string;
  user: Pick<User, 'id' | 'email' | 'fullName'>;
};

export type SignInResponse = SignUpResponse;

export type SignUpRequest = Pick<User, 'email' | 'fullName'> & {
  password: string;
};

export type SignInRequest = Pick<User, 'email'> & {
  password: string;
};
