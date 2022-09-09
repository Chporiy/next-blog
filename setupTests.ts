import '@testing-library/jest-dom';
import { loadEnvConfig } from '@next/env';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setupServer } from 'msw/lib/node';
import handlers from './tests/mocks/handlers';
import 'whatwg-fetch';
import { makeStore } from './src/app/store';
import emptyApi from './src/app/api/emptyApi';

loadEnvConfig(process.cwd());

const store = makeStore();
const server = setupServer(...handlers());

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => {
  server.resetHandlers();
  store.dispatch(emptyApi.util.resetApiState());
});
afterAll(() => server.close());
