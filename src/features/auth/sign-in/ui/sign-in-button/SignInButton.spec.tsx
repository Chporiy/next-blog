import routerMock from 'next-router-mock';

import { render, screen, waitFor } from '~/tests/utils';

import { Button } from './SignInButton';

describe('<SignInButton />', () => {
  it('should navigate to the /auth/signIn page by click on the button', async () => {
    const { user } = render(<Button />);

    const button = screen.getByRole('link', { name: 'Sign in' });

    await user.click(button);
    await waitFor(() => {
      expect(routerMock).toMatchObject({
        pathname: '/auth/signIn',
      });
    });
  });
});
