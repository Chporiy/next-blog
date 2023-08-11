import { rest } from 'msw';

import { getUserPostsForTest } from '../../utils/get-user-posts-for-test/getUserPostsForTest';
import { allPostMocks, postMock0 } from '../data';

const postApiHandlers = [
  rest.get('/posts', (req, res, ctx) => {
    const userId = req.url.searchParams.get('userId');

    if (userId) {
      return res(ctx.json(getUserPostsForTest(Number(userId))));
    }

    return res(ctx.json(allPostMocks));
  }),
  rest.get('/posts/:postId', (req, res, ctx) => res(ctx.json(postMock0))),
  rest.post('/posts', (req, res, ctx) => res(ctx.json(postMock0))),
];

export default postApiHandlers;
