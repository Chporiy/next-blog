import { act, renderHook } from '@testing-library/react';

import { userMock0 } from '~/tests/mocks';

import { useSignInMutation } from '~/entities/auth';

import { AppStore } from '~/shared/lib';

import { createReduxProdiverWrapper } from '../create-redux-prodiver-wrapper/createReduxProdiverWrapper';

/**
 * Call useSignInMutation() hook for test
 * Sign in by test user
 *
 * @param {AppStore} store - redux-store for collecting authenticated user data
 */
export const signInForTest = async (store: AppStore) => {
  const {
    result: {
      current: [signIn],
    },
  } = renderHook(() => useSignInMutation(), {
    wrapper: createReduxProdiverWrapper(store),
  });

  await act(() => signIn({ email: userMock0.email, password: 'password' }));
};
