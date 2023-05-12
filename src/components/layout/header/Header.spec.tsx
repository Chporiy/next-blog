import { screen, waitFor } from '@testing-library/react';
import routerMock from 'next/router';
import { render } from '../../../../tests/utils/customRender';
import Header from './Header';

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

  describe('Sign in', () => {
    it('should render "Sign in" link', () => {
      render(<Header />);

      const signInLink = screen.getByRole('link', { name: 'Sign in' });

      expect(signInLink).toBeInTheDocument();
    });

    it('should navigate to the /auth/signIn page by click on "Sign in" link', async () => {
      const { user } = render(<Header />);

      const signInLink = screen.getByRole('link', { name: 'Sign in' });

      await user.click(signInLink);
      await waitFor(() => {
        expect(routerMock).toMatchObject({
          pathname: '/auth/signIn',
        });
      });
    });
  });
});
