import { rest } from 'msw';
import { postMock0, postMock1 } from '../data/postMocks';

const postApiHandlers = [
  rest.get('/posts', (req, res, ctx) => res(ctx.json([postMock0, postMock1]))),
  rest.get('/posts/:postId', (req, res, ctx) => res(ctx.json(postMock0))),
  rest.post('/posts', (req, res, ctx) => res(ctx.json(postMock0))),
];

export default postApiHandlers;
