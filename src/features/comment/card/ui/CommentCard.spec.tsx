import { commentMock0, userMock0 } from '~/tests/mocks';
import { render, screen, signInForTest } from '~/tests/utils';
import { getCommentsByCommentsForTest } from '~/tests/utils/get-comments-by-comments-for-test/getCommentsByCommentsForTest';

import { List } from '~/shared/ui';

import { Card } from './CommentCard';

describe('<CommentCard>', () => {
  const getReplyButton = async () =>
    screen.findByRole('button', { name: 'Reply' });
  const getCancelButton = () => screen.getByRole('button', { name: 'Cancel' });

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

  it('should render a reply button if user is signed in', async () => {
    const { store } = render(<Card comment={commentMock0} />);

    await signInForTest(store);

    const button = await getReplyButton();

    expect(button).toBeInTheDocument();
  });

  it('should render the create comment form by click on the reply button', async () => {
    const { store, user } = render(<Card comment={commentMock0} />);

    await signInForTest(store);

    const button = await getReplyButton();

    await user.click(button);

    const form = document.querySelector('form');
    const formBodyPlaceholder = screen.getByPlaceholderText('Reply...');

    expect(form).toBeInTheDocument();
    expect(formBodyPlaceholder).toBeInTheDocument();
  });

  it('should close the create comment form by click on the cancel button', async () => {
    const { store, user } = render(<Card comment={commentMock0} />);

    await signInForTest(store);

    await user.click(await getReplyButton());

    const form = document.querySelector('form');

    expect(form).toBeInTheDocument();

    await user.click(getCancelButton());

    expect(form).not.toBeInTheDocument();
  });
});
