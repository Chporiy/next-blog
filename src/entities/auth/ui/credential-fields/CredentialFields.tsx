import { Box } from '@chakra-ui/react';
import { Field } from 'formik';
import { ReactNode } from 'react';

import { PasswordField, TextField } from '~/shared/ui';

/**
 * Component contains email and password credential fields
 *
 * @returns {ReactNode}
 */
const CredentialFields = () => (
  <>
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
  </>
);

export default CredentialFields;
