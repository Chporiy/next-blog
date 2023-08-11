import { Box, Button } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { object } from 'yup';

import { CredentialFields, useSignUpMutation } from '~/entities/auth';

import { ROUTES } from '~/shared/config';
import { email, fullName, password } from '~/shared/lib';
import { TextField } from '~/shared/ui';

const validationSchema = object().shape({
  email,
  password,
  fullName,
});

/**
 * A form for user registration by email and password
 * After succesful registration redirect to home page
 */
const SignUpForm = () => {
  const [signUp, { isSuccess }] = useSignUpMutation();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push(ROUTES.index);
    }
  }, [isSuccess, router]);

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        email: '',
        password: '',
        fullName: '',
      }}
      onSubmit={async (value, { resetForm }) => {
        await signUp(value).unwrap();

        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
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
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
