import { screen, waitFor } from '@testing-library/react';
import routerMock from 'next/router';
import { render } from '../../../../tests/utils/customRender';
import Header from './Header';
import { userMock0 } from '../../../../tests/mocks/data/userMocks';
import signInForTest from '../../../../tests/utils/signInForTest/signInForTest';

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
  it('should render <SignInButton /> instead of <UserPanel /> if user is not authenticated', () => {
    render(<Header />);

    const signInButton = screen.getByRole('link', { name: 'Sign in' });

    expect(signInButton).toBeInTheDocument();
  });

  it('should render <UserPanel /> instead of <SignInButton /> if user is authenticated', async () => {
    const { store } = render(<Header />);

    await signInForTest(store);

    const authenticatedUser = await screen.findByText(userMock0.email);

    expect(authenticatedUser).toBeInTheDocument();
  });
});
