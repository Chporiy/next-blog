import { string } from 'yup';

export const fullName = string()
  .trim()
  .required('Please enter your full name')
  .max(255, 'Maximum length of full name is 255 characters')
  .matches(
    /\b([A-Z][-,a-z. ']+[ ]*)+/gm,
    'Must contains letters and should contians spaces, commas, dots, dashes',
  );
