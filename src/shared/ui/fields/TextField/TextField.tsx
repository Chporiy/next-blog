import { Input } from '@chakra-ui/react';
import React from 'react';

import { BaseField, BaseFieldProps } from '../BaseField/BaseField';

/**
 * A wrapper around <BaseField />
 * Insert chakra-ui <Input /> as input filed in <FormControls />
 *
 * @param {BaseFieldProps} props
 */
export const TextField = (props: BaseFieldProps) => (
  <BaseField {...props}>{(inputProps) => <Input {...inputProps} />}</BaseField>
);
