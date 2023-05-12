import { rest } from 'msw';
import { postMock } from '../data/postMocks';

const postApiHandlers = [
  rest.get('/posts/:postId', (req, res, ctx) => res(ctx.json(postMock))),
];

export default postApiHandlers;
