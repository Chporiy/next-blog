/* eslint-disable import/prefer-default-export */
import { Post } from '../../../src/features/posts/types';
import { userMock } from './userMocks';

export const postMock: Post = {
  id: 0,
  userId: userMock.id,
  title: 'title',
  body: 'body',
  date: '2022-01-29T00:00:00.000Z',
  preview: 'https://loremflickr.com/640/480/food',
};
