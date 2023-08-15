import { Post } from '~/entities/post';

export const getPostAmount = (posts: Post[]) => posts.length;
