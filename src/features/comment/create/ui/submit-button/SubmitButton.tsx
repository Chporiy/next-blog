import { Button, ButtonProps } from '@chakra-ui/react';
import { useFormikContext } from 'formik';

export const SubmitButton = (props: ButtonProps) => {
  const { isSubmitting } = useFormikContext();

  return (
    <Button
      {...props}
      type="submit"
      colorScheme="teal"
      isDisabled={isSubmitting}
    >
      Submit
    </Button>
  );
};
