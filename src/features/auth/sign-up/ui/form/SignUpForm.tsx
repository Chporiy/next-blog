import { Box, Button } from '@chakra-ui/react';
import { Formik, Form as FormikForm, Field } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { CredentialFields, useSignUpMutation } from '~/entities/auth';

import { ROUTES } from '~/shared/config';
import { TextField } from '~/shared/ui';

import { initialValues, schema } from '../../model';

/**
 * A form for user registration by email and password
 * After succesful registration redirect to home page
 */
export const Form = () => {
  const [signUp, { isSuccess }] = useSignUpMutation();
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
        await signUp(value).unwrap();

        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <Box mb="4">
            <Field
              component={TextField}
              name="fullName"
              label="Full name"
              placeholder="Enter your full name"
            />
          </Box>
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
