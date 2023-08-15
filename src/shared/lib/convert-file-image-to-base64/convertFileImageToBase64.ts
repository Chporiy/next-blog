const isFileImage = (file: File) => file.type.includes('image/');

export const convertFileImageToBase64 = (file: File): Promise<string> => {
  if (!isFileImage(file)) {
    throw new Error('A file is not an image');
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
};
