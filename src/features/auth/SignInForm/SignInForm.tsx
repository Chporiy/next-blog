import React, { ReactNode, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { object } from 'yup';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import email from '../../../utils/validation/email/email';
import password from '../../../utils/validation/password/password';
import { useSignInMutation } from '../authApi';
import CredentialFields from '../CredentialFields/CredentialFields';

const validationSchema = object().shape({
  email,
  password,
});

/**
 * A form for user sign in by email and password
 *
 * @returns {ReactNode}
 */
const SignInForm = () => {
  const [signIn, { isSuccess }] = useSignInMutation();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push('/');
    }
  }, [isSuccess, router]);

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (value, { resetForm }) => {
        await signIn(value).unwrap();

        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
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

export default SignInForm;
