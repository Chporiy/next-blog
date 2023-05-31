import { rest } from 'msw';
import { accessToken } from '../data/tokens';

const authApiHandlers = [
  rest.post('/signup', (req, res, ctx) =>
    res(
      ctx.json({
        accessToken,
      }),
    ),
  ),
  rest.post('/signin', (req, res, ctx) =>
    res(
      ctx.json({
        accessToken,
      }),
    ),
  ),
];

export default authApiHandlers;
