import { Textarea } from '@chakra-ui/react';

import BaseField, { BaseFieldProps } from '../BaseField/BaseField';

/**
 * A wrapper around <BaseField />
 * Insert chakra-ui <Textarea /> as input filed in <FormControls />
 *
 * @param {BaseFieldProps} props
 */
const TextareaField = (props: BaseFieldProps) => (
  <BaseField {...props}>
    {(textareaProps) => <Textarea {...textareaProps} resize="none" />}
  </BaseField>
);

export default TextareaField;
