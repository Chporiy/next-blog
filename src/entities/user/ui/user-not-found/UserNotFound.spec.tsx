import { render, screen } from '~/tests/utils';

import { UserNotFound } from './UserNotFound';

describe('<UserNotFound />', () => {
  it('should return "User not found"', () => {
    render(<UserNotFound />);

    expect(screen.getByText(/User not found/)).toBeInTheDocument();
  });

  it('should render fallback avatar', () => {
    render(<UserNotFound />);

    expect(screen.getByRole('img')).toHaveClass('chakra-avatar__svg');
  });
});
