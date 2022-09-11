import { string } from 'yup';

const fullName = string()
  .trim()
  .required('Please enter your full name')
  .matches(
    /\b([A-Z][-,a-z. ']+[ ]*)+/gm,
    'Must contains letters and should contians spaces, commas, dots, dashes',
  );

export default fullName;
