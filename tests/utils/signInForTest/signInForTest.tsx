import { act, renderHook } from '@testing-library/react';
import { AppStore } from '../../../src/app/store';
import { useSignInMutation } from '../../../src/features/auth/authApi';
import { userMock } from '../../mocks/data/userMocks';
import createReduxProdiverWrapper from '../createReduxProdiverWrapper/createReduxProdiverWrapper';

/**
 * Call useSignInMutation() hook for test
 * Sign in by test user
 *
 * @param {AppStore} store - redux-store for collecting authenticated user data
 */
const signInForTest = async (store: AppStore) => {
  const {
    result: {
      current: [signIn],
    },
  } = renderHook(() => useSignInMutation(), {
    wrapper: createReduxProdiverWrapper(store),
  });

  await act(() => signIn({ email: userMock.email, password: 'password' }));
};

export default signInForTest;
