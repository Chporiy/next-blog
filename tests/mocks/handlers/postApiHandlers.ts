import { rest } from 'msw';
import { allPostMocks, postMock0 } from '../data/postMocks';

const postApiHandlers = [
  rest.get('/posts', (req, res, ctx) => res(ctx.json(allPostMocks))),
  rest.get('/posts/:postId', (req, res, ctx) => res(ctx.json(postMock0))),
  rest.post('/posts', (req, res, ctx) => res(ctx.json(postMock0))),
];

export default postApiHandlers;
