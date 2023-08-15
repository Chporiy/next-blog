import { object } from 'yup';

import { email, fullName, password } from '~/shared/lib';

export const schema = object().shape({
  email,
  password,
  fullName,
});
