import { Comment } from '~/shared/model';

import { postMock0, postMock1 } from './postMocks';
import { userMock0, userMock1 } from './userMocks';

export const commentMock0: Comment = {
  id: '25dc68bc-d90f-4362-8d9a-f192724ac202',
  postId: postMock0.id,
  userId: userMock0.id,
  body: 'comment body 0',
  date: '2022-01-29T00:00:00.000Z',
};

export const commentMock1: Comment = {
  id: 'db741125-4a24-4e0b-8f64-bd224c9f70cf',
  postId: postMock1.id,
  userId: userMock1.id,
  body: 'comment body 1',
  date: '2022-01-30T00:00:00.000Z',
};

export const allCommentMocks = [commentMock0, commentMock1];
