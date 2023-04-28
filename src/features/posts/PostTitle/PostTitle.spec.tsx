import { screen } from '@testing-library/react';
import { render } from '../../../../tests/utils/customRender';
import PostTitle from './PostTitle';

describe('<PostTitle />', () => {
  it('should be in the document', () => {
    render(<PostTitle>title</PostTitle>);

    expect(screen.getByText(/title/)).toBeInTheDocument();
  });

  it('should be chakru-ui heading component', () => {
    render(<PostTitle>title</PostTitle>);

    const element = screen.getByText(/title/);

    expect(element).toHaveClass('chakra-heading');
    expect(element.tagName).toEqual('H2');
    expect(element).toHaveStyle('font-size: 1.5em');
  });
});
