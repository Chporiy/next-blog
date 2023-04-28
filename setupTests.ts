/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { loadEnvConfig } from '@next/env';
import { setupServer } from 'msw/node';
import handlers from './tests/mocks/handlers';
import { makeStore } from './src/app/store';
import emptyApi from './src/app/api/emptyApi';

loadEnvConfig(process.cwd());

jest.mock('next/router', () => require('next-router-mock'));
// jest.mock('next/dist/shared/lib/router-context', () => {
//   const RouterContext = createContext(memoryRouter);
//   return { RouterContext };
// });

const store = makeStore();
const server = setupServer(...handlers());

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => {
  server.resetHandlers();
  store.dispatch(emptyApi.util.resetApiState());
});
afterAll(() => server.close());
