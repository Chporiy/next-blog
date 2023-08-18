import { User } from './user';

export interface Post {
  id: number;
  userId: User['id'];
  title: string;
  body: string;
  date: string;
  preview: string;
}
