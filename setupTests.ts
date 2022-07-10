import '@testing-library/jest-dom';
import { loadEnvConfig } from '@next/env';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setupServer } from 'msw/lib/node';
import handlers from './tests/mocks/handlers';
import 'whatwg-fetch';

loadEnvConfig(process.cwd());

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
