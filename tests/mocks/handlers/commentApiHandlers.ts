import { rest } from 'msw';

import { getCommentsByCommentsForTest } from '~/tests/utils/get-comments-by-comments-for-test/getCommentsByCommentsForTest';
import { getCommentsByUserForTest } from '~/tests/utils/get-comments-by-user-for-test/getPrimaryCommentsByUserForTest';
import { getPrimaryCommentsByPostForTest } from '~/tests/utils/get-primary-comments-by-post-for-test/getPrimaryCommentsByPostForTest';

import { allCommentMocks } from '../data';

export const commentApiHandlers = [
  rest.get('/comments', (req, res, ctx) => {
    const postId = req.url.searchParams.get('postId');

    if (postId) {
      return res(ctx.json(getPrimaryCommentsByPostForTest(postId)));
    }

    const userId = req.url.searchParams.get('userId');

    if (userId) {
      return res(ctx.json(getCommentsByUserForTest(userId)));
    }

    return res(ctx.json(allCommentMocks));
  }),
  rest.post('/comments', async (req, res, ctx) => {
    const comment = {
      ...(await req.json()),
      id: 2,
    };

    return res(ctx.json(comment));
  }),
  rest.get('/comments/:commentId/comments', (req, res, ctx) => {
    const commentId = req.params.commentId.toString();

    return res(ctx.json(getCommentsByCommentsForTest(commentId)));
  }),
];
