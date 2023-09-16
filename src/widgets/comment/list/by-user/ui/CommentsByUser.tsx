import { commentModel, useGetCommentsByUserQuery } from '~/entities/comment';

import { User } from '~/shared/model';

import { BaseCommentList } from '../../base';

interface Props {
  userId: User['id'];
}

export const List = ({ userId }: Props) => {
  const { data: comments, isSuccess } = useGetCommentsByUserQuery(userId, {
    selectFromResult: (result) => ({
      ...result,
      data: commentModel.selectors.sortCommentsByDescDate(result),
    }),
  });

  if (!isSuccess) {
    return null;
  }

  return <BaseCommentList comments={comments} />;
};
