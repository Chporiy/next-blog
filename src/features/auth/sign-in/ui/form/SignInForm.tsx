import { Button } from '@chakra-ui/react';
import { Formik, Form as FormikForm } from 'formik';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { CredentialFields, useSignInMutation } from '~/entities/auth';

import { ROUTES } from '~/shared/config';

import { initialValues, schema } from '../../model';

/**
 * A form for user sign in by email and password
 *
 * @returns {import('react').ReactNode}
 */
export const Form = () => {
  const [signIn, { isSuccess }] = useSignInMutation();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push(ROUTES.index);
    }
  }, [isSuccess, router]);

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={async (value, { resetForm }) => {
        await signIn(value).unwrap();

        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <CredentialFields />
          <Button
            type="submit"
            w="full"
            colorScheme="teal"
            isDisabled={isSubmitting}
          >
            Continue
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
};
