import { screen } from '@testing-library/react';
import SignUp from '../../../src/pages/auth/signUp';
import { render } from '../../utils/customRender';

describe('Page SignUp', () => {
  it('should render signUp page', () => {
    render(<SignUp />);

    expect(screen.getByText('Welcome to Next blog')).toBeInTheDocument();
    expect(document.querySelector('form')).toBeInTheDocument();
  });

  it('should have a link to signIn page', () => {
    render(<SignUp />);
    expect(screen.getByRole('link', { name: 'Sign in' })).toBeInTheDocument();
  });
});
