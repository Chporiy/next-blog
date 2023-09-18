import { CreateCommentRequest } from '~/entities/comment';

type Params = Pick<
  CreateCommentRequest,
  'postId' | 'commentId' | 'userId' | 'body'
>;

export const createCommentDto = (params: Params) => {
  const comment: CreateCommentRequest = {
    ...params,
    date: new Date().toISOString(),
    hasChildrenComments: false,
  };

  return comment;
};
