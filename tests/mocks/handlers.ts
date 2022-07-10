import { rest } from 'msw';
import { user } from './data';

const handlers = [
  rest.get(`${process.env.NEXT_PUBLIC_API_URL}`, (req, res, ctx) =>
    res(ctx.json([user])),
  ),
];

export default handlers;
