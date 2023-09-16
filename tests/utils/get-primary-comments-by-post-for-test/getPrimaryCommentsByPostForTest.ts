import { Post } from '~/shared/model';

import { allCommentMocks } from '../../mocks/data/commentMocks';

export const getPrimaryCommentsByPostForTest = (postId: Post['id']) =>
  allCommentMocks.filter(
    (comment) => comment.postId === postId && comment.commentId === '',
  );
