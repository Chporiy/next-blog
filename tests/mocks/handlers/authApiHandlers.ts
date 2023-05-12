import { rest } from 'msw';
import { userMock } from '../data/userMocks';
import { accessToken } from '../data/tokens';

const authApiHandlers = [
  rest.post('/signup', (req, res, ctx) =>
    res(
      ctx.json({
        accessToken,
        user: userMock,
      }),
    ),
  ),
  rest.post('/signin', (req, res, ctx) =>
    res(
      ctx.json({
        accessToken,
        user: userMock,
      }),
    ),
  ),
];

export default authApiHandlers;
