import { string } from 'yup';

/**
 * Yup validation schema for email
 */
const email = string()
  .trim()
  .email('Email format is xxx@xx.xx')
  .required('Please enter your email');

export default email;
