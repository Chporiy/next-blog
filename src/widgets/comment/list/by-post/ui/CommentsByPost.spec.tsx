import { postMock0 } from '~/tests/mocks';
import { render, screen, waitFor } from '~/tests/utils';
import { getCommentsByCommentsForTest } from '~/tests/utils/get-comments-by-comments-for-test/getCommentsByCommentsForTest';
import { getPrimaryCommentsByPostForTest } from '~/tests/utils/get-primary-comments-by-post-for-test/getPrimaryCommentsByPostForTest';

import { List } from './CommentsByPost';

describe('<CommentsByPost />', () => {
  it('should render primary comments by a post', async () => {
    render(<List postId={postMock0.id} />);

    const commentsByPost = getPrimaryCommentsByPostForTest(postMock0.id);

    await waitFor(async () => {
      commentsByPost.forEach((comment) => {
        const element = screen.getByText(comment.body);

        expect(element).toBeInTheDocument();
      });
    });
  });

  it('should render an inner comments list if the list slot is passed as a prop', async () => {
    render(<List postId={postMock0.id} />);

    const postCommentsWithInnerComments = getPrimaryCommentsByPostForTest(
      postMock0.id,
    ).find((comment) => comment.childrenCommentsAmount !== 0);
    const innerComments = getCommentsByCommentsForTest(
      postCommentsWithInnerComments.id,
    );

    await waitFor(() => {
      innerComments.forEach((comment) => {
        const innerCommentBody = screen.getByText(comment.body);

        expect(innerCommentBody).toBeInTheDocument();
      });
    });
  });
});
