/**
 * Convert a date to locale string format
 *
 * @param {string} date
 * @return {string} locale date
 */
export const convertDateToLocalString = (date: string) =>
  new Date(date).toLocaleString();
