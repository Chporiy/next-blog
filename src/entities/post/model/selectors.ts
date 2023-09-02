import { createSelector } from '@reduxjs/toolkit';

import { sortByDescDate } from '~/shared/lib';
import { Post } from '~/shared/model';

const emptyArray: Post[] = [];

export const sortPostsByDescDate = createSelector(
  (result) => result.data,
  (data: Post[]) => (data ? sortByDescDate([...data]) : emptyArray),
);
