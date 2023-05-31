import { renderHook, screen, waitFor } from '@testing-library/react';
import useUser from './useUser';
import { makeStore } from '../../app/store';
import { userMock } from '../../../tests/mocks/data/userMocks';
import signInForTest from '../../../tests/utils/signInForTest/signInForTest';
import createReduxProdiverWrapper from '../../../tests/utils/createReduxProdiverWrapper/createReduxProdiverWrapper';
import { render } from '../../../tests/utils/customRender';
import SignOutButton from '../../features/auth/SignOutButton/SignOutButton';

describe('useUser()', () => {
  it('should return undefined if the user isn`t defined', () => {
    const { result } = renderHook(() => useUser(), {
      wrapper: createReduxProdiverWrapper(makeStore()),
    });

    expect(result.current).toBeUndefined();
  });

  it('should return the user if it is defined', async () => {
    const store = makeStore();

    await signInForTest(store);

    const { result } = renderHook(() => useUser(), {
      wrapper: createReduxProdiverWrapper(store),
    });

    await waitFor(() => {
      expect(result.current).toEqual(userMock);
    });
  });

  it('should return undefind after sign out', async () => {
    const store = makeStore();
    const { user } = render(<SignOutButton />, { store });
    const signOutButton = screen.getByRole('button', { name: 'Sign out' });

    await signInForTest(store);

    const { result } = renderHook(() => useUser(), {
      wrapper: createReduxProdiverWrapper(store),
    });

    await waitFor(() => {
      expect(result.current).toEqual(userMock);
    });
    await user.click(signOutButton);

    await waitFor(() => {
      expect(result.current).toBeUndefined();
    });
  });
});
