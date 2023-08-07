import { rest } from 'msw';
import { postMock } from '../data/postMocks';

const postApiHandlers = [
  rest.get('/posts', (req, res, ctx) => res(ctx.json([postMock]))),
  rest.get('/posts/:postId', (req, res, ctx) => res(ctx.json(postMock))),
  rest.post('/posts', (req, res, ctx) => res(ctx.json(postMock))),
];

export default postApiHandlers;
