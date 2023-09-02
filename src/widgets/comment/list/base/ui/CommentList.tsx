import { CommentCard } from '~/features/comment';

import { Comment } from '~/shared/model';
import { List as BaseList } from '~/shared/ui';

interface Props {
  comments: Comment[];
}

export const List = ({ comments }: Props) => (
  <BaseList items={comments}>
    {(comment) => <CommentCard comment={comment} />}
  </BaseList>
);
