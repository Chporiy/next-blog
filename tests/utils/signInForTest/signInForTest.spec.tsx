import { rootReducer } from '~/app';

import { accessToken } from '~/tests/mocks';

import { makeStore } from '~/shared/lib';

import { signInForTest } from './signInForTest';

describe('signInForTest()', () => {
  it('should sign in by test user', async () => {
    const store = makeStore(rootReducer);

    await signInForTest(store);

    expect(store.getState().authSlice.accessToken).toEqual(accessToken);
  });
});
