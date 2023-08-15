/**
 * Convert a date to locale date string format
 *
 * @param {string} date
 * @return {string} locale date
 */
export const convertDateToLocalDate = (date: string) =>
  new Date(date).toLocaleDateString();
