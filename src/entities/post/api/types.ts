import { Post, User } from '~/shared/model';

export type GetPostsRequest = void;
export type GetPostsResponse = Post[];

export type GetPostRequest = Post['id'];
export type GetPostResponse = Post;

export type GetPostsByUserRequest = User['id'];
export type GetPostsByUserResponse = Post[];

export type CreatePostRequest = Omit<Post, 'id'>;
export type CreatePostResponse = Post;
