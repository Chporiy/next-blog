import { skipToken } from '@reduxjs/toolkit/dist/query';

import { commentModel, useGetCommentsByCommentQuery } from '~/entities/comment';

import { Comment } from '~/shared/model';

import { BaseCommentList } from '../../base';

interface Props {
  commentId: Comment['id'];
  childrenCommentsAmount: Comment['childrenCommentsAmount'];
}

export const List = ({ commentId, childrenCommentsAmount }: Props) => {
  const { data: comments, isSuccess } = useGetCommentsByCommentQuery(
    childrenCommentsAmount !== 0 ? commentId : skipToken,
    {
      selectFromResult: (result) => ({
        ...result,
        data: commentModel.selectors.sortCommentsByDescDate(result),
      }),
    },
  );

  if (!isSuccess) {
    return null;
  }

  return (
    <BaseCommentList comments={comments} slots={{ innerCommentsList: List }} />
  );
};
