import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';
import React from 'react';
import { FieldProps, getIn } from 'formik';

export type BaseFieldProps = FieldProps & FormControlProps;

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
  } = props;
  const error = getIn(errors, field.name);
  const touch = getIn(touched, field.name);

  return (
    <FormControl
      isInvalid={error && touch}
      isDisabled={isDisabled ?? isSubmitting}
    >
      <FormLabel>{label}</FormLabel>
      {children}
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default BaseField;
