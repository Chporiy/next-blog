import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';

import { commentMock0, postMock0 } from '~/tests/mocks';
import { render, screen, signInForTest, waitFor } from '~/tests/utils';

import { Form } from './CreateInnerCommentForm';

describe('<CreateInnerCommentForm />', () => {
  const getBodyField = () => screen.getByPlaceholderText('Reply...');
  const getSubmitButton = () => screen.getByRole('button', { name: 'Submit' });
  const getCancelButton = () => screen.getByRole('button', { name: 'Cancel' });
  const fillForm = async (user: UserEvent) => {
    await user.type(getBodyField(), commentMock0.body);
  };
  const close = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should contain fields', () => {
    render(
      <Form postId={postMock0.id} commentId={commentMock0.id} close={close} />,
    );

    const bodyField = getBodyField();

    expect(bodyField).toBeInTheDocument();
  });

  describe('body field', () => {
    it('should show an error if field is empty', async () => {
      const { user } = render(
        <Form
          postId={postMock0.id}
          commentId={commentMock0.id}
          close={close}
        />,
      );
      const button = getSubmitButton();

      await user.click(button);

      const error = screen.getByText('body is a required field');

      expect(error).toBeInTheDocument();
    });
  });

  describe('submitting', () => {
    it('should disable a submit button if a form is submitting', async () => {
      const { user, store } = render(
        <Form
          postId={postMock0.id}
          commentId={commentMock0.id}
          close={close}
        />,
      );
      const button = getSubmitButton();

      await signInForTest(store);
      await fillForm(user);
      await user.click(button);

      expect(button).toBeDisabled();
    });

    it('should reset a from after successful request', async () => {
      const { user, store } = render(
        <Form
          postId={postMock0.id}
          commentId={commentMock0.id}
          close={close}
        />,
      );
      const button = getSubmitButton();

      await signInForTest(store);
      await fillForm(user);
      await user.click(button);

      const bodyField = getBodyField();

      await waitFor(() => {
        expect(bodyField).toHaveValue('');
      });
    });

    it('should call cancel action after successful request', async () => {
      const { user, store } = render(
        <Form
          postId={postMock0.id}
          commentId={commentMock0.id}
          close={close}
        />,
      );
      const submitButton = getSubmitButton();

      await signInForTest(store);
      await fillForm(user);
      await user.click(submitButton);

      expect(close).toHaveBeenCalledTimes(1);
    });
  });

  describe('cancelation', () => {
    it('should call close action by click on the cancel button', async () => {
      const { user } = render(
        <Form
          postId={postMock0.id}
          commentId={commentMock0.id}
          close={close}
        />,
      );
      const cancelButton = getCancelButton();

      await user.click(cancelButton);

      expect(close).toHaveBeenCalledTimes(1);
    });

    it('should reset form by click on cancel button', async () => {
      const { user } = render(
        <Form
          postId={postMock0.id}
          commentId={commentMock0.id}
          close={close}
        />,
      );
      const cancelButton = getCancelButton();

      await fillForm(user);
      await user.click(cancelButton);

      const bodyField = getBodyField();

      await waitFor(() => {
        expect(bodyField).toHaveValue('');
      });
    });
  });
});
