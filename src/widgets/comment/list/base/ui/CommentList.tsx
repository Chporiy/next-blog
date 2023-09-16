import { CommentCard } from '~/features/comment';

import { Comment } from '~/shared/model';
import { List as BaseList } from '~/shared/ui';

interface Props {
  comments: Comment[];
  slots?: {
    innerCommentsList?: (...args: unknown[]) => JSX.Element;
  };
}

export const List = ({
  comments,
  slots = { innerCommentsList: () => null },
}: Props) => (
  <BaseList items={comments}>
    {(comment) => (
      <CommentCard
        comment={comment}
        slots={{
          commentsList: slots.innerCommentsList,
        }}
      />
    )}
  </BaseList>
);
