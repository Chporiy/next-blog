import { Post } from '../model/types';

export type GetPostsRequest = void;
export type GetPostsResponse = Post[];

export type GetPostRequest = Post['id'];
export type GetPostResponse = Post;

export type GetPostsByUserRequest = number;
export type GetPostsByUserResponse = Post[];

export type CreatePostRequest = Omit<Post, 'id'>;
export type CreatePostResponse = Post;
