import { Post } from '~/shared/model';

import { userMock0, userMock1 } from './userMocks';

export const postMock0: Post = {
  id: 'c454af2d-75e0-42e9-affd-cebfb0c4d0fd',
  userId: userMock0.id,
  title: 'post title 0',
  body: 'post body 0',
  date: '2022-01-29T00:00:00.000Z',
  preview: 'https://loremflickr.com/640/480/food',
};

export const postMock1: Post = {
  id: 'de7c427d-9e14-4bdd-8633-3493b9e2fd57',
  userId: userMock1.id,
  title: 'post title 1',
  body: 'post body 1',
  date: '2022-01-30T00:00:00.000Z',
  preview: 'https://loremflickr.com/640/480/food',
};

export const allPostMocks = [postMock0, postMock1];
