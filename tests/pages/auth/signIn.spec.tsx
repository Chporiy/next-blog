import { screen } from '@testing-library/react';
import { render } from '../../utils/customRender';
import SignIn from '../../../src/pages/auth/signIn';

describe('Page SignIn', () => {
  it('should render signIn page', () => {
    render(<SignIn />);

    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(document.querySelector('form')).toBeInTheDocument();
  });

  it('should have a link to signUp page', () => {
    render(<SignIn />);

    expect(screen.getByText("Haven't an account?")).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sign up' })).toBeInTheDocument();
  });
});
