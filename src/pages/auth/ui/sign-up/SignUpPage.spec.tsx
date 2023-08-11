import { render, screen } from '~/tests/utils';

import { SignUpPage } from './SignUpPage';

describe('Page SignUp', () => {
  it('should render signUp page', () => {
    render(<SignUpPage />);

    expect(screen.getByText('Welcome to Next blog')).toBeInTheDocument();
    expect(document.querySelector('form')).toBeInTheDocument();
  });

  it('should have a link to signIn page', () => {
    render(<SignUpPage />);

    expect(screen.getByText('Have an account?')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sign in' })).toBeInTheDocument();
  });
});
