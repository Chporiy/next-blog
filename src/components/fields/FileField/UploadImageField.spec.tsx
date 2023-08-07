import { Field, Form, Formik } from 'formik';
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
      {() => (
        <Form>
          <Field component={UploadImageField} name="image" />
        </Form>
      )}
    </Formik>
  );

  const getUploadImageField = () =>
    document.querySelector('input[type=file]') as HTMLInputElement;
  const getConvertedImageField = () =>
    document.querySelector('input[name=image]') as HTMLInputElement;

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
