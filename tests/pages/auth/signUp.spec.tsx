import { screen } from '@testing-library/react';
import SignUp from '../../../src/pages/auth/signUp';
import renderWithStore from '../../utils/renderWithStore';

describe('Page SignUp', () => {
  it('should render signUp page', () => {
    renderWithStore(<SignUp />);

    expect(screen.getByText('Welcome to Next blog')).toBeInTheDocument();
    expect(document.querySelector('form')).toBeInTheDocument();
  });
});
