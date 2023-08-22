import { Comment } from '~/shared/model';

import { postMock0, postMock1 } from './postMocks';
import { userMock0, userMock1 } from './userMocks';

export const commentMock0: Comment = {
  id: 0,
  postId: postMock0.id,
  userId: userMock0.id,
  body: 'body 0',
  date: '2022-01-29T00:00:00.000Z',
};

export const commentMock1: Comment = {
  id: 1,
  postId: postMock1.id,
  userId: userMock1.id,
  body: 'body 1',
  date: '2022-01-30T00:00:00.000Z',
};

export const allCommentMocks = [commentMock0, commentMock1];
