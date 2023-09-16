import {
  commentModel,
  useGetPrimaryCommentsByPostQuery,
} from '~/entities/comment';

import { Post } from '~/shared/model';

import { BaseCommentList } from '../../base';
import { CommentsByComment } from '../../by-comment';

interface Props {
  postId: Post['id'];
}

export const List = ({ postId }: Props) => {
  const { data: comments, isSuccess } = useGetPrimaryCommentsByPostQuery(
    postId,
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
    <BaseCommentList
      comments={comments}
      slots={{ innerCommentsList: CommentsByComment }}
    />
  );
};
