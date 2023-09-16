import { User } from '~/shared/model';

import { allCommentMocks } from '../../mocks/data/commentMocks';

export const getCommentsByUserForTest = (userId: User['id']) =>
  allCommentMocks.filter((comment) => comment.userId === userId);
