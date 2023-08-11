import { Post } from '~/entities/post';

import { userMock0, userMock1 } from './userMocks';

export const postMock0: Post = {
  id: 0,
  userId: userMock0.id,
  title: 'title 0',
  body: 'body 0',
  date: '2022-01-29T00:00:00.000Z',
  preview: 'https://loremflickr.com/640/480/food',
};

export const postMock1: Post = {
  id: 1,
  userId: userMock1.id,
  title: 'title 1',
  body: 'body 1',
  date: '2022-01-29T00:00:00.000Z',
  preview: 'https://loremflickr.com/640/480/food',
};

export const allPostMocks = [postMock0, postMock1];
