import { rest } from 'msw';
import { userMock0, userMock1 } from '../data/userMocks';

const userApiHandlers = [
  rest.get('/users', (req, res, ctx) => res(ctx.json([userMock0, userMock1]))),
  rest.get('/users/:id', (req, res, ctx) => res(ctx.json(userMock0))),
];

export default userApiHandlers;
