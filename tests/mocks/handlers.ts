import { rest } from 'msw';
import { post, signInResponse, signUpResponse, user } from './data';

const handlers = () => [
  rest.get('/users', (req, res, ctx) => res(ctx.json([user]))),
  rest.get('/posts/:postId', (req, res, ctx) => res(ctx.json(post))),
  rest.post('/signup', (req, res, ctx) => res(ctx.json(signUpResponse))),
  rest.post('/signin', (req, res, ctx) => res(ctx.json(signInResponse))),
];

export default handlers;
