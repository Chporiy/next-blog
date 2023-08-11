import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';
import { FieldProps, getIn } from 'formik';
import React, { ReactNode } from 'react';

export interface BaseFieldProps
  extends Omit<FieldProps & FormControlProps, 'children'> {
  children: (args: { [k in string]: unknown }) => ReactNode;
}

/**
 * A chakra-ui form control with FormLabel and ErrorMessage
 * FormControl bound with Formik and uses as base for others fields
 *
 * @param {BaseFieldProps} props - Formik <Field /> props with Chakra-ui FormControlProps
 */
const BaseField = (props: BaseFieldProps) => {
  const {
    field,
    isDisabled,
    form: { errors, touched, isSubmitting },
    label,
    children,
    ...rest
  } = props;
  const error = getIn(errors, field.name);
  const touch = getIn(touched, field.name);

  return (
    <FormControl
      isInvalid={error && touch}
      isDisabled={isDisabled ?? isSubmitting}
    >
      <FormLabel>{label}</FormLabel>
      {children({ ...field, ...rest })}
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default BaseField;
