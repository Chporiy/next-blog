import { object } from 'yup';

import { email, password } from '~/shared/lib';

export const schema = object().shape({
  email,
  password,
});
