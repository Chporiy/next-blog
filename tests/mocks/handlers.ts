import { rest } from 'msw';
import { post, signUpResponse, user } from './data';

const handlers = () => [
  rest.get(`${process.env.NEXT_PUBLIC_API_URL}/users`, (req, res, ctx) =>
    res(ctx.json([user])),
  ),
  rest.get(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/:postId`,
    (req, res, ctx) => res(ctx.json(post)),
  ),
  rest.post(`${process.env.NEXT_PUBLIC_API_URL}/signup`, (req, res, ctx) =>
    res(ctx.json(signUpResponse)),
  ),
];

export default handlers;
