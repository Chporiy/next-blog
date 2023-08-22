import { Comment, Post, User } from '~/shared/model';

export type GetCommentsByPostRequest = Post['id'];
export type GetCommentsByPostResponse = Comment[];

export type GetCommentsByUserRequest = User['id'];
export type GetCommentsByUserResponse = Comment[];
