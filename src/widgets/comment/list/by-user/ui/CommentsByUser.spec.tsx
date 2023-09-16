import { userMock0 } from '~/tests/mocks';
import { render, screen, waitFor } from '~/tests/utils';
import { getCommentsByUserForTest } from '~/tests/utils/get-comments-by-user-for-test/getPrimaryCommentsByUserForTest';

import { List } from './CommentsByUser';

describe('<CommentsByPost />', () => {
  it('should render primary comments by a post', async () => {
    render(<List userId={userMock0.id} />);

    const commentsByUser = getCommentsByUserForTest(userMock0.id);

    await waitFor(() => {
      commentsByUser.forEach((comment) => {
        const element = screen.getByText(comment.body);

        expect(element).toBeInTheDocument();
      });
    });
  });
});
