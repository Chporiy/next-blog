import { render, screen, signInForTest, waitFor } from '~/tests/utils';

import { Button } from './SignOutButton';

describe('<SignOutButton />', () => {
  it('should clear auth store by click on button', async () => {
    const { user, store } = render(<Button />);
    const button = screen.getByRole('button', { name: 'Sign out' });

    await signInForTest(store);
    await user.click(button);

    await waitFor(() => {
      expect(store.getState().auth).toEqual({
        accessToken: '',
      });
    });
  });

  it('should clear RTK Query api state', async () => {
    const { user, store } = render(<Button />);
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
