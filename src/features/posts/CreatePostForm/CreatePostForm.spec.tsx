import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { render, screen, waitFor } from '../../../../tests/utils/customRender';
import CreatePostForm from './CreatePostForm';
import signInForTest from '../../../../tests/utils/signInForTest/signInForTest';
import convertFileImageToBase64 from '../../../utils/convertFileImageToBase64/convertFileImageToBase64';

describe('<CreatePostForm />', () => {
  const getTitleField = () => screen.getByRole('textbox', { name: 'Title' });
  const getBodyField = () => screen.getByRole('textbox', { name: 'Content' });
  const getUploadPreviewField = () =>
    document.querySelector('input[type=file]') as HTMLInputElement;
  const getConvertedPreviewField = () =>
    document.querySelector('input[name=preview]') as HTMLInputElement;
  const getSubmitButton = () => screen.getByRole('button', { name: 'Create' });

  const file = new File(['some image content'], 'image.png', {
    type: 'image/png',
  });
  const uploadFile = async (user: UserEvent) => {
    await user.upload(getUploadPreviewField(), file);
  };

  it('should contain fields', () => {
    render(<CreatePostForm />);

    expect(getTitleField()).toBeInTheDocument();
    expect(getBodyField()).toBeInTheDocument();
    expect(getUploadPreviewField()).toBeInTheDocument();
  });

  describe('title field', () => {
    it('should contain a placeholder', () => {
      render(<CreatePostForm />);

      const titleField = screen.getByPlaceholderText('New post title here...');

      expect(titleField).toBeInTheDocument();
    });

    it('should show an error if field is empty', async () => {
      const { user } = render(<CreatePostForm />);

      await user.click(getSubmitButton());

      const error = screen.getByText('title is a required field');

      expect(error).toBeInTheDocument();
    });
  });

  describe('body field', () => {
    it('should contain a placeholder', () => {
      render(<CreatePostForm />);

      const bodyField = screen.getByPlaceholderText(
        'Write your post content here...',
      );

      expect(bodyField).toBeInTheDocument();
    });

    it('should show an error if field is empty', async () => {
      const { user } = render(<CreatePostForm />);

      await user.click(getSubmitButton());

      const error = screen.getByText('body is a required field');

      expect(error).toBeInTheDocument();
    });
  });

  describe('preview field', () => {
    it('should show an error if field is empty', async () => {
      const { user } = render(<CreatePostForm />);

      await user.click(getSubmitButton());

      const error = screen.getByText('preview is a required field');

      expect(error).toBeInTheDocument();
    });

    it('should not show a preview image if image is not selected', async () => {
      render(<CreatePostForm />);

      const image = screen.queryByRole('img');

      expect(image).toBeNull();
    });

    it('should show a preview image if image has been selected', async () => {
      const { user } = render(<CreatePostForm />);
      const fileAsBase64Format = await convertFileImageToBase64(file);

      await uploadFile(user);

      const image = await screen.findByRole('img');

      expect(image).toHaveAttribute('src', fileAsBase64Format);
    });
  });

  describe('submitting', () => {
    const fillForm = async (user: UserEvent) => {
      await user.type(getTitleField(), 'test title');
      await user.type(getBodyField(), 'test body');
      await uploadFile(user);
    };

    it('should disable a submitting button if a form is submitting', async () => {
      const { user, store } = render(<CreatePostForm />);

      await signInForTest(store);

      const button = getSubmitButton();

      await fillForm(user);
      await user.click(button);

      expect(button).toBeDisabled();
    });

    it('should reset form after successful request', async () => {
      const { user, store } = render(<CreatePostForm />);

      await signInForTest(store);

      const button = getSubmitButton();

      await fillForm(user);
      await user.click(button);

      await waitFor(() => {
        expect(getTitleField()).toHaveValue('');
        expect(getBodyField()).toHaveValue('');
        expect(getConvertedPreviewField()).toHaveValue('');
      });
    });
  });
});
