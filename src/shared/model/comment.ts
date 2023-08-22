import { Post } from './post';
import { User } from './user';

export interface Comment {
  id: number;
  postId: Post['id'];
  userId: User['id'];
  body: string;
  date: string;
}
