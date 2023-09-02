import { commentModel, useGetCommentsByPostQuery } from '~/entities/comment';

import { Post } from '~/shared/model';

import { BaseCommentList } from '../../base';

interface Props {
  postId: Post['id'];
}

export const List = ({ postId }: Props) => {
  const { data: comments, isSuccess } = useGetCommentsByPostQuery(postId, {
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
