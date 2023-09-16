import { allCommentMocks } from '~/tests/mocks';
import { render, screen } from '~/tests/utils';

import { List } from './CommentList';

describe('<CommentList />', () => {
  it('should render comments list', () => {
    render(<List comments={allCommentMocks} />);

    allCommentMocks.forEach((comment) => {
      const element = screen.getByText(comment.body);

      expect(element).toBeInTheDocument();
    });
  });
});
