/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';
import { Post } from './types';

const emptyArray = [];

export const sortPostsByDescDate = createSelector(
  (result) => result.data,
  (data: Post[]) =>
    data
      ? [...data].sort((a, b) => -1 * a.date.localeCompare(b.date))
      : emptyArray,
);
