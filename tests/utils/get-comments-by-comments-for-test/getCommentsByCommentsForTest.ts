import { Comment } from '~/shared/model';

import { allCommentMocks } from '../../mocks/data/commentMocks';

export const getCommentsByCommentsForTest = (commentId: Comment['id']) =>
  allCommentMocks.filter((comment) => comment.commentId === commentId);
