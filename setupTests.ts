/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { loadEnvConfig } from '@next/env';
import { setupServer } from 'msw/node';

import { baseApiUtil } from '~/shared/api';

import { rootReducer } from './src/app';
import { makeStore } from './src/shared/lib';
import { testMswHandlers } from './tests/mocks';

loadEnvConfig(process.cwd());

jest.mock('next/router', () => require('next-router-mock'));

const store = makeStore(rootReducer);
const server = setupServer(...testMswHandlers());

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => {
  server.resetHandlers();
  store.dispatch(baseApiUtil.resetApiState());
});
afterAll(() => server.close());
