import { render, screen, signInForTest, waitFor } from '~/tests/utils';

import SignInButton from './SignOutButton';

describe('<SignOutButton />', () => {
  it('should clear authSlice by click on button', async () => {
    const { user, store } = render(<SignInButton />);
    const button = screen.getByRole('button', { name: 'Sign out' });

    await signInForTest(store);
    await user.click(button);

    await waitFor(() => {
      expect(store.getState().authSlice).toEqual({
        accessToken: '',
      });
    });
  });

  it('should clear RTK Query api state', async () => {
    const { user, store } = render(<SignInButton />);
    const button = screen.getByRole('button', { name: 'Sign out' });

    await signInForTest(store);
    await user.click(button);

    await waitFor(() => {
      expect(store.getState()).toMatchObject({
        api: {
          queries: {},
          mutations: {},
          provided: {},
          subscriptions: {},
        },
      });
    });
  });
});
