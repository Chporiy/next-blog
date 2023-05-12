import { SignInResponse, SignUpResponse } from '../../src/features/auth/types';
import { Post } from '../../src/features/posts/types';
import { User } from '../../src/features/users/types';

export const user: User = {
  id: 0,
  fullName: 'John Smith',
  email: 'JohnSmith@mail.com',
  avatar: 'https://loremflickr.com/640/480/fashion',
};

export const post: Post = {
  id: 0,
  userId: 0,
  title: 'title',
  body: 'body',
  date: '2022-01-29T00:00:00.000Z',
  preview: 'https://loremflickr.com/640/480/food',
};

export const signUpResponse: SignUpResponse = {
  accessToken: 'token',
  user,
};

export const signInResponse: SignInResponse = {
  accessToken: 'token',
  user,
};
