import { waitFor } from '~/tests/utils';

import { convertFileImageToBase64 } from './convertFileImageToBase64';

describe('convertFileImageToBase64()', () => {
  const fileContent = ['file content'];

  it('should throw an error if file is not an image', () => {
    const file = new File(fileContent, 'file.txt', { type: 'text/plain' });

    expect(() => convertFileImageToBase64(file)).toThrowError(
      new Error('A file is not an image'),
    );
  });

  it('should convert a file image to the base64 format', async () => {
    const file = new File(['file-content'], 'image.png', { type: 'image/png' });
    const reader = new FileReader();
    const fileAsBase64Format = await convertFileImageToBase64(file);

    reader.readAsDataURL(file);

    await waitFor(() => {
      expect(fileAsBase64Format).toEqual(reader.result);
    });
  });
});
