/**
 * Convert a date to locale date string format
 *
 * @param {string} date
 * @return {string} locale date
 */
const convertDateToLocalDate = (date: string) =>
  new Date(date).toLocaleDateString();

export default convertDateToLocalDate;
