import { rest } from 'msw';

import { accessToken } from '../data';

export const authApiHandlers = [
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
