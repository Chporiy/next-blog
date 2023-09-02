import { createSelector } from '@reduxjs/toolkit';

import { sortByDescDate } from '~/shared/lib';
import { Comment } from '~/shared/model';

const emptyArray: Comment[] = [];

export const sortCommentsByDescDate = createSelector(
  (result) => result.data,
  (data: Comment[]) => (data ? sortByDescDate([...data]) : emptyArray),
);
