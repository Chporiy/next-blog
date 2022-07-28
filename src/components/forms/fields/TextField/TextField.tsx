import { Input } from '@chakra-ui/react';
import React from 'react';
import BaseField, { BaseFieldProps } from '../BaseField';

/**
 * A wrapper around <BaseField />
 * Insert chakra-ui <Input /> as input filed in <FornControls />
 *
 * @param {BaseFieldProps} props
 */
const TextField = (props: BaseFieldProps) => {
  const { field, placeholder } = props;

  return (
    <BaseField {...props}>
      <Input {...field} placeholder={placeholder} />
    </BaseField>
  );
};

export default TextField;
