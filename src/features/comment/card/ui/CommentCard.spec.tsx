import { commentMock0, userMock0 } from '~/tests/mocks';
import { render, screen } from '~/tests/utils';
import { getCommentsByCommentsForTest } from '~/tests/utils/get-comments-by-comments-for-test/getCommentsByCommentsForTest';

import { List } from '~/shared/ui';

import { Card } from './CommentCard';

describe('<CommentCard>', () => {
  it('should render a comment author', async () => {
    render(<Card comment={commentMock0} />);

    const author = await screen.findByText(userMock0.fullName);

    expect(author).toBeInTheDocument();
  });

  it('should render a comment body', () => {
    render(<Card comment={commentMock0} />);

    const body = screen.getByText(commentMock0.body);

    expect(body).toBeInTheDocument();
  });

  it('should render an inner comments list if the list slot is passed as a prop', () => {
    const innerComments = getCommentsByCommentsForTest(commentMock0.id);

    render(
      <Card
        comment={commentMock0}
        slots={{
          commentsList: () => (
            <List items={innerComments}>{(comment) => comment.body}</List>
          ),
        }}
      />,
    );

    innerComments.forEach((comment) => {
      const innerCommentBody = screen.getByText(comment.body);

      expect(innerCommentBody).toBeInTheDocument();
    });
  });
});
