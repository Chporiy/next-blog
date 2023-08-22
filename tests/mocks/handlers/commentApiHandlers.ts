import { rest } from 'msw';

import { getCommentsByPostForTest } from '~/tests/utils/get-comments-by-post-for-test/getCommentsByPostForTest';
import { getCommentsByUserForTest } from '~/tests/utils/get-comments-by-user-for-test/getCommentsByUserForTest';

import { allCommentMocks } from '../data';

export const commentApiHandlers = [
  rest.get('/comments', (req, res, ctx) => {
    const postId = req.url.searchParams.get('postId');

    if (postId) {
      return res(ctx.json(getCommentsByPostForTest(Number(postId))));
    }

    const userId = req.url.searchParams.get('userId');

    if (userId) {
      return res(ctx.json(getCommentsByUserForTest(Number(userId))));
    }

    return res(ctx.json(allCommentMocks));
  }),
];
