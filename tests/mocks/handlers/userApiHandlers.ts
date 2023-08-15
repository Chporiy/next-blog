import { rest } from 'msw';

import { allUserMocks, userMock0 } from '../data';

export const userApiHandlers = [
  rest.get('/users', (req, res, ctx) => res(ctx.json(allUserMocks))),
  rest.get('/users/:id', (req, res, ctx) => res(ctx.json(userMock0))),
];
