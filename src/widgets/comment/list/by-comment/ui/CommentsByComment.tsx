import { commentModel, useGetCommentsByCommentQuery } from '~/entities/comment';

import { Comment } from '~/shared/model';

import { BaseCommentList } from '../../base';

interface Props {
  commentId: Comment['id'];
}

export const List = ({ commentId }: Props) => {
  const { data: comments, isSuccess } = useGetCommentsByCommentQuery(
    commentId,
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
