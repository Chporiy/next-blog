import { rest } from 'msw';

import { allUserMocks, userMock0 } from '../data';

const userApiHandlers = [
  rest.get('/users', (req, res, ctx) => res(ctx.json(allUserMocks))),
  rest.get('/users/:id', (req, res, ctx) => res(ctx.json(userMock0))),
];

export default userApiHandlers;
