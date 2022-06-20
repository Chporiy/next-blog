import { render, screen } from '@testing-library/react';
import NextLink from './NextLink';

describe('<NextLink />', () => {
  it('should be in document', () => {
    render(<NextLink href="test">link name</NextLink>);

    expect(screen.getByText(/link name/i)).toBeInTheDocument();
  });

  it('should contain a href property', () => {
    render(<NextLink href="test">link name</NextLink>);

    expect(screen.getByText(/link name/i).getAttribute('href')).toEqual(
      '/test',
    );
  });
});
