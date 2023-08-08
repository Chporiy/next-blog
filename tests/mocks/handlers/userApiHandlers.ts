import { rest } from 'msw';
import { allUserMocks, userMock0 } from '../data/userMocks';
import getUserPostsForTest from '../../utils/getUserPostsForTest/getUserPostsForTest';

const userApiHandlers = [
  rest.get('/users', (req, res, ctx) => res(ctx.json(allUserMocks))),
  rest.get('/users/:id', (req, res, ctx) => res(ctx.json(userMock0))),
  rest.get('/users/:id/posts', (req, res, ctx) =>
    res(ctx.json(getUserPostsForTest(Number(req.params.id)))),
  ),
];

export default userApiHandlers;
