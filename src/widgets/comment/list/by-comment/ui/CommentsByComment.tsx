import { skipToken } from '@reduxjs/toolkit/dist/query';

import { commentModel, useGetCommentsByCommentQuery } from '~/entities/comment';

import { Comment } from '~/shared/model';

import { BaseCommentList } from '../../base';

interface Props {
  commentId: Comment['id'];
  hasChildrenComments: Comment['hasChildrenComments'];
}

export const List = ({ commentId, hasChildrenComments }: Props) => {
  const { data: comments, isSuccess } = useGetCommentsByCommentQuery(
    hasChildrenComments ? commentId : skipToken,
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
