import { commentMock0, userMock0 } from '~/tests/mocks';
import { render, screen } from '~/tests/utils';

import { Card } from './CommentCard';

describe('<CommentCard>', () => {
  it('should have a comment author', async () => {
    render(<Card comment={commentMock0} />);

    const author = await screen.findByText(userMock0.fullName);

    expect(author).toBeInTheDocument();
  });

  it('should render a comment body', () => {
    render(<Card comment={commentMock0} />);

    const body = screen.getByText(commentMock0.body);

    expect(body).toBeInTheDocument();
  });
});
