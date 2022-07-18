import { Post } from '../../src/features/posts/types';
import { User } from '../../src/features/users/types';

export const user: User = {
  id: 0,
  firstName: 'John',
  lastName: 'Smith',
  email: 'JohnSmith@mail.com',
  avatar: 'https://loremflickr.com/640/480/fashion',
};

export const post: Post = {
  id: 0,
  title: 'title',
  body: 'body',
  date: '2022-01-29T00:00:00.000Z',
  userId: 0,
};
