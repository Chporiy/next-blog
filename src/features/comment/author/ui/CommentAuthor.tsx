import { ReactElement } from 'react';

import { CommentDate } from '~/entities/comment';
import { Author as EntitiesAuthor } from '~/entities/user';

import { Comment } from '~/shared/model';

type Props = {
  comment: Comment;
};

/**
 * A component for display comment author
 *
 * @param {Props} props
 * @param {Comment} props.comment
 * @returns {ReactElement}
 */
export const Author = ({ comment }: Props) => (
  <EntitiesAuthor
    id={comment.userId}
    slots={{ date: <CommentDate comment={comment} /> }}
  />
);
