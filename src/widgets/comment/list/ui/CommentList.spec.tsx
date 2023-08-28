import { commentMock0, commentMock1 } from '~/tests/mocks';
import { render, screen } from '~/tests/utils';

import { List } from './CommentList';

describe('<CommentList />', () => {
  it('should render  comments list', () => {
    const comments = [commentMock0, commentMock1];

    render(<List comments={comments} />);

    comments.forEach((comment) => {
      const element = screen.getByText(comment.body);

      expect(element).toBeInTheDocument();
    });
  });
});
