import routerMock from 'next/router';

import { userMock0 } from '~/tests/mocks';
import { render, screen, signInForTest, waitFor } from '~/tests/utils';

import { Header } from './Header';

describe('<Header />', () => {
  it('should render <header /> tag', () => {
    render(<Header />);

    expect(document.querySelector('header')).toBeInTheDocument();
  });

  describe('logo', () => {
    it('should render logo', () => {
      render(<Header />);

      expect(screen.getByAltText('logo')).toBeInTheDocument();
    });

    it('should navigate to index page by click on logo', async () => {
      routerMock.push('/some_page');

      const { user } = render(<Header />);

      await user.click(screen.getByAltText('logo'));
      await waitFor(() => {
        expect(routerMock).toMatchObject({
          pathname: '/',
        });
      });
    });
  });
  it('should render <NoUserPanel />  if current user is not defined', () => {
    render(<Header />);

    const signInButton = screen.getByRole('link', { name: 'Sign in' });

    expect(signInButton).toBeInTheDocument();
  });

  it('should render <UserPanel /> if user is defined', async () => {
    const { store } = render(<Header />);

    await signInForTest(store);

    const authenticatedUser = await screen.findByText(userMock0.email);

    expect(authenticatedUser).toBeInTheDocument();
  });
});
