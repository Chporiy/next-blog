import { rootReducer } from '~/app';

import { signInForTest } from '~/tests/utils';

import { makeStore } from '~/shared/lib';

import { AuthGuard } from './AuthGuard';

describe('AuthGuard', () => {
  it('should return an empty object if the current user is defined', async () => {
    const store = makeStore(rootReducer);

    await signInForTest(store);

    const pageAccessProps = new AuthGuard(store).checkAccessToThePage();

    expect(pageAccessProps).toEqual({
      props: {},
    });
  });

  it('should return object with redirect to /auth/signIn page if user is not defined', async () => {
    const store = makeStore(rootReducer);

    const pageAccessProps = new AuthGuard(store).checkAccessToThePage();

    expect(pageAccessProps).toEqual({
      redirect: {
        destination: '/auth/signIn',
        permanent: false,
      },
    });
  });
});
