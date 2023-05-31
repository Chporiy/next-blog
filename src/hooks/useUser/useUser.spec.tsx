import { renderHook, waitFor } from '@testing-library/react';
import useUser from './useUser';
import { makeStore } from '../../app/store';
import { userMock } from '../../../tests/mocks/data/userMocks';
import signInForTest from '../../../tests/utils/signInForTest/signInForTest';
import createReduxProdiverWrapper from '../../../tests/utils/createReduxProdiverWrapper/createReduxProdiverWrapper';

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

    const useUserHook = renderHook(() => useUser(), {
      wrapper: createReduxProdiverWrapper(store),
    });

    await waitFor(() => {
      expect(useUserHook.result.current).toEqual(userMock);
    });
  });
});
