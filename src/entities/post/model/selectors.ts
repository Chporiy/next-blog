import { createSelector } from '@reduxjs/toolkit';

import { Post } from './types';

const emptyArray = [];

const sortPostsByDescDate = createSelector(
  (result) => result.data,
  (data: Post[]) =>
    data
      ? [...data].sort((a, b) => -1 * a.date.localeCompare(b.date))
      : emptyArray,
);

export const selectors = {
  sortPostsByDescDate,
};
