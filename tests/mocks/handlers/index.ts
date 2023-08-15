import { authApiHandlers } from './authApiHandlers';
import { postApiHandlers } from './postApiHandlers';
import { userApiHandlers } from './userApiHandlers';

export const testMswHandlers = () => [
  ...userApiHandlers,
  ...postApiHandlers,
  ...authApiHandlers,
];
