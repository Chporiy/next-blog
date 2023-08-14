import { render, screen } from '~/tests/utils';

import { Title } from './PostTitle';

describe('<PostTitle />', () => {
  it('should be in the document', () => {
    render(<Title>title</Title>);

    expect(screen.getByText(/title/)).toBeInTheDocument();
  });

  it('should be chakru-ui heading component', () => {
    render(<Title>title</Title>);

    const element = screen.getByText(/title/);

    expect(element).toHaveClass('chakra-heading');
    expect(element.tagName).toEqual('H2');
    expect(element).toHaveStyle('font-size: 1.5em');
  });
});
