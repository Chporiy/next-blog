import { Field, Form, Formik } from 'formik';
import { Button } from '@chakra-ui/react';
import UploadImageField from './UploadImageField';
import { render, screen, waitFor } from '../../../../tests/utils/customRender';
import convertFileImageToBase64 from '../../../utils/convertFileImageToBase64/convertFileImageToBase64';

describe('<UploadImageField />', () => {
  const FormWithUploadImageField = () => (
    <Formik
      initialValues={{
        image: '',
      }}
      onSubmit={jest.fn()}
    >
      {({ handleReset }) => (
        <Form>
          <Field component={UploadImageField} name="image" />
          <Button onClick={handleReset}>Reset</Button>
        </Form>
      )}
    </Formik>
  );

  const getUploadImageField = () =>
    document.querySelector('input[type=file]') as HTMLInputElement;
  const getConvertedImageField = () =>
    document.querySelector('input[name=image]') as HTMLInputElement;
  const getResetFormButton = () =>
    screen.getByRole('button', { name: 'Reset' });

  const imageName = 'test-image.png';
  const createTestImageFile = () =>
    new File(['some image content'], imageName, {
      type: 'image/png',
    });

  it('should show selected image name', async () => {
    const { user } = render(<FormWithUploadImageField />);
    const uploadImageField = getUploadImageField();
    const file = createTestImageFile();

    await user.upload(uploadImageField, file);

    const selectedImageName = await screen.findByText(imageName);

    expect(selectedImageName).toBeInTheDocument();
  });

  it('should hide selected image name if form has beed resetted', async () => {
    const { user } = render(<FormWithUploadImageField />);
    const uploadImageField = getUploadImageField();
    const file = createTestImageFile();

    await user.upload(uploadImageField, file);

    const selectedImageName = await screen.findByText(imageName);

    expect(selectedImageName).toBeInTheDocument();

    const resetButton = getResetFormButton();

    await user.click(resetButton);

    expect(selectedImageName).toHaveTextContent('');
  });

  it('should convert a selected image to the base64 format', async () => {
    const { user } = render(<FormWithUploadImageField />);
    const uploadImageField = getUploadImageField();
    const convertedImageField = getConvertedImageField();
    const file = createTestImageFile();

    await user.upload(uploadImageField, file);

    await waitFor(async () => {
      expect(convertedImageField.value).toEqual(
        await convertFileImageToBase64(file),
      );
    });
  });
});
