import userApiHandlers from './userApiHandlers';
import postApiHandlers from './postApiHandlers';
import authApiHandlers from './authApiHandlers';

const handlers = () => [
  ...userApiHandlers,
  ...postApiHandlers,
  ...authApiHandlers,
];

export default handlers;
