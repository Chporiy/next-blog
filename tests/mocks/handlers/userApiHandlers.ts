import { rest } from 'msw';
import { userMock } from '../data/userMocks';

const userApiHandlers = [
  rest.get('/users', (req, res, ctx) => res(ctx.json([userMock]))),
];

export default userApiHandlers;
