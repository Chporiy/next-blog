import { authApiHandlers } from './authApiHandlers';
import { commentApiHandlers } from './commentApiHandlers';
import { postApiHandlers } from './postApiHandlers';
import { userApiHandlers } from './userApiHandlers';

export const testMswHandlers = () => [
  ...userApiHandlers,
  ...postApiHandlers,
  ...authApiHandlers,
  ...commentApiHandlers,
];
