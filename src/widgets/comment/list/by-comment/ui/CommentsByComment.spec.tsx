import { commentMock0 } from '~/tests/mocks';
import { render, screen, waitFor } from '~/tests/utils';
import { getCommentsByCommentsForTest } from '~/tests/utils/get-comments-by-comments-for-test/getCommentsByCommentsForTest';

import { List } from './CommentsByComment';

describe('<CommentsByComemnt />', () => {
  it('should render comments by a comment', async () => {
    render(
      <List
        commentId={commentMock0.id}
        childrenCommentsAmount={commentMock0.childrenCommentsAmount}
      />,
    );

    const commentsByComment = getCommentsByCommentsForTest(commentMock0.id);

    await waitFor(async () => {
      commentsByComment.forEach((comment) => {
        const element = screen.getByText(comment.body);

        expect(element).toBeInTheDocument();
      });
    });
  });
});
