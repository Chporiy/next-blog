import { postMock0 } from '~/tests/mocks';
import { render, screen } from '~/tests/utils';
import { getCommentsByPostForTest } from '~/tests/utils/get-comments-by-post-for-test/getCommentsByPostForTest';

import { List } from './CommentsByPost';

describe('<CommentsByPost />', () => {
  it('should render comments by a post', () => {
    render(<List postId={postMock0.id} />);

    const commentsByPost = getCommentsByPostForTest(postMock0.id);

    commentsByPost.forEach(async (comment) => {
      const element = await screen.findByText(comment.body);

      expect(element).toBeInTheDocument();
    });
  });
});
