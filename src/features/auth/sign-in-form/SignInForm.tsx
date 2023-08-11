import { Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import { object } from 'yup';

import { CredentialFields, useSignInMutation } from '~/entities/auth';

import { ROUTES } from '~/shared/config';
import { email, password } from '~/shared/lib';

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
      router.push(ROUTES.index);
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
