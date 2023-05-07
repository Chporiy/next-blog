import { rest } from 'msw';
import { post, signUpResponse, user } from './data';

const handlers = () => [
  rest.get('/users', (req, res, ctx) => res(ctx.json([user]))),
  rest.get('/posts/:postId', (req, res, ctx) => res(ctx.json(post))),
  rest.post('/signup', (req, res, ctx) => res(ctx.json(signUpResponse))),
];

export default handlers;
