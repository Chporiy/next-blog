import { rootReducer } from '~/app';

import { userMock0 } from '~/tests/mocks';
import {
  createReduxProdiverWrapper,
  render,
  renderHook,
  screen,
  signInForTest,
  waitFor,
} from '~/tests/utils';

import { SignOutButton } from '~/entities/auth';

import { makeStore } from '~/shared/lib';

import { useUser } from './useUser';

describe('useUser()', () => {
  it('should return undefined if the user isn`t defined', () => {
    const { result } = renderHook(() => useUser(), {
      wrapper: createReduxProdiverWrapper(makeStore(rootReducer)),
    });

    expect(result.current).toBeUndefined();
  });

  it('should return the user if it is defined', async () => {
    const store = makeStore(rootReducer);

    await signInForTest(store);

    const { result } = renderHook(() => useUser(), {
      wrapper: createReduxProdiverWrapper(store),
    });

    await waitFor(() => {
      expect(result.current).toEqual(userMock0);
    });
  });

  it('should return undefind after sign out', async () => {
    const store = makeStore(rootReducer);
    const { user } = render(<SignOutButton />, { store });
    const signOutButton = screen.getByRole('button', { name: 'Sign out' });

    await signInForTest(store);

    const { result } = renderHook(() => useUser(), {
      wrapper: createReduxProdiverWrapper(store),
    });

    await waitFor(() => {
      expect(result.current).toEqual(userMock0);
    });
    await user.click(signOutButton);

    await waitFor(() => {
      expect(result.current).toBeUndefined();
    });
  });
});
