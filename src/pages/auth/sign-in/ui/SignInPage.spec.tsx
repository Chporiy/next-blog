import { render, screen } from '~/tests/utils';

import { Page } from './SignInPage';

describe('Page SignIn', () => {
  it('should render signIn page', () => {
    render(<Page />);

    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(document.querySelector('form')).toBeInTheDocument();
  });

  it('should have a link to signUp page', () => {
    render(<Page />);

    expect(screen.getByText("Haven't an account?")).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sign up' })).toBeInTheDocument();
  });
});
