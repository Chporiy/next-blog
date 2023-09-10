import { User } from './user';

export interface Post {
  id: string;
  userId: User['id'];
  title: string;
  body: string;
  date: string;
  preview: string;
}
