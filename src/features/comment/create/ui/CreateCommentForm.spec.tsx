import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';

import { commentMock0, postMock0 } from '~/tests/mocks';
import { render, screen, signInForTest, waitFor } from '~/tests/utils';

import { Form } from './CreateCommentForm';

describe('<CreateCommentForm />', () => {
  const getBodyField = () => screen.getByRole('textbox', { name: 'Content' });
  const getSubmitButton = () => screen.getByRole('button', { name: 'Submit' });

  it('should contain fields', () => {
    render(<Form postId={postMock0.id} />);

    const bodyField = getBodyField();

    expect(bodyField).toBeInTheDocument();
  });

  describe('body field', () => {
    it('should have a placeholder', () => {
      render(<Form postId={postMock0.id} />);

      const bodyField = getBodyField();

      expect(bodyField).toHaveAttribute('placeholder', 'Add to the discussion');
    });

    it('should show an error if field is empty', async () => {
      const { user } = render(<Form postId={postMock0.id} />);
      const button = getSubmitButton();

      await user.click(button);

      const error = screen.getByText('body is a required field');

      expect(error).toBeInTheDocument();
    });
  });

  describe('submitting', () => {
    const fillForm = async (user: UserEvent) => {
      await user.type(getBodyField(), commentMock0.body);
    };

    it('should disable a submit button if a form is submitting', async () => {
      const { user, store } = render(<Form postId={postMock0.id} />);
      const button = getSubmitButton();

      await signInForTest(store);
      await fillForm(user);
      await user.click(button);

      expect(button).toBeDisabled();
    });

    it('should resut a from after successful request', async () => {
      const { user, store } = render(<Form postId={postMock0.id} />);
      const button = getSubmitButton();

      await signInForTest(store);
      await fillForm(user);
      await user.click(button);

      const bodyField = getBodyField();

      await waitFor(() => {
        expect(bodyField).toHaveValue('');
      });
    });
  });
});
