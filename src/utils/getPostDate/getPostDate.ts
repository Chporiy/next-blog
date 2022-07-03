/**
 * Convert a post publication date to locale date string format
 *
 * @param {string} date - a post publication date. 2022-01-29T06:12:12.829Z
 * @return {string} locale date
 */
const getPostDate = (date: string) => new Date(date).toLocaleDateString();

export default getPostDate;
