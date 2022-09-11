import React from 'react';
import { Formik, Form, Field } from 'formik';
import { object } from 'yup';
import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import email from '../../../utils/validation/email/email';
import password from '../../../utils/validation/password/password';
import TextField from '../../../components/fields/TextField/TextField';
import PasswordField from '../../../components/fields/PasswordField/PasswordField';
import { useSignUpMutation } from '../authApi';
import fullName from '../../../utils/validation/fullName/fullName';

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
  const [signUp] = useSignUpMutation();
  const router = useRouter();

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        email: '',
        password: '',
        fullName: '',
      }}
      onSubmit={async (value, { setFieldValue }) => {
        await signUp(value).unwrap();

        setFieldValue('email', '', false);
        setFieldValue('password', '', false);
        setFieldValue('fullName', '', false);

        router.push('/');
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
          <Box mb="4">
            <Field
              component={TextField}
              name="email"
              label="Email"
              placeholder="Enter your email"
            />
          </Box>
          <Box mb="4">
            <Field
              component={PasswordField}
              name="password"
              label="Password"
              placeholder="Enter your password"
            />
          </Box>
          <Button
            type="submit"
            w="full"
            colorScheme="teal"
            loadingText="Submitting"
            isDisabled={isSubmitting}
            isLoading={isSubmitting}
          >
            Continue
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
