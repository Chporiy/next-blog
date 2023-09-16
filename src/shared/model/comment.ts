import { Post } from './post';
import { User } from './user';

export interface Comment {
  id: string;
  postId: Post['id'];
  userId: User['id'];
  commentId: Comment['id'];
  body: string;
  date: string;
  childrenCommentsAmount: number;
}
