import { render, screen } from '~/tests/utils';

import { NoUserPanel } from './NoUserPanel';

describe('<NoUserPanel />', () => {
  it('should render <SignInButton />', () => {
    render(<NoUserPanel />);

    const signInButton = screen.getByRole('link', { name: 'Sign in' });

    expect(signInButton).toBeInTheDocument();
  });
});
