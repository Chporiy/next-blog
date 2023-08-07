import { Button, Input, Stack, Text } from '@chakra-ui/react';
import { useCallback, ChangeEvent, useState, useRef, useEffect } from 'react';
import BaseField, { BaseFieldProps } from '../BaseField/BaseField';
import convertFileImageToBase64 from '../../../utils/convertFileImageToBase64/convertFileImageToBase64';

/**
 * A wrapper around <BaseField />
 * Convert a selected image to the base64 format
 *
 * @param {BaseFieldProps} props
 */
const UploadImageField = (props: BaseFieldProps) => {
  const {
    field: { name, value },
    form: { setFieldValue },
  } = props;
  const inputFile = useRef<HTMLInputElement>(null);
  const fileInputName = `file-input-for-${name}`;
  const [selectedFileName, setSelectedFileName] = useState('');

  const onClick = useCallback(() => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  }, []);
  const onChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.currentTarget.files[0];
      const convertedFile = await convertFileImageToBase64(file);

      setSelectedFileName(file.name);
      setFieldValue(name, convertedFile);
    },
    [name, setFieldValue],
  );

  useEffect(() => {
    if (value === '') {
      setSelectedFileName('');
    }
  }, [value, setSelectedFileName]);

  return (
    <>
      <Input
        hidden
        ref={inputFile}
        name={fileInputName}
        type="file"
        accept="image/*"
        onChange={onChange}
      />
      <BaseField {...props}>
        {(inputProps) => (
          <>
            <Stack direction="row" align="center">
              <Button colorScheme="teal" onClick={onClick}>
                Select an image
              </Button>
              <Text>{selectedFileName}</Text>
            </Stack>
            <Input {...inputProps} hidden readOnly />
          </>
        )}
      </BaseField>
    </>
  );
};

export default UploadImageField;
