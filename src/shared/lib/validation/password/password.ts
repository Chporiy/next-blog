import { string } from 'yup';

const password = string()
  .trim()
  .required('Please enter your password')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
    'Must contain 8 characters, One uppercase, One lowercase, One number and One special case character',
  );

export default password;
