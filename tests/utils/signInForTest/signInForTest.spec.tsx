import { makeStore } from '../../../src/app/store';
import { accessToken } from '../../mocks/data/tokens';
import signInForTest from './signInForTest';

describe('signInForTest()', () => {
  it('should sign in by test user', async () => {
    const store = makeStore();

    await signInForTest(store);

    expect(store.getState().authSlice.accessToken).toEqual(accessToken);
  });
});
