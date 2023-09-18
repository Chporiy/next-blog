import { Comment, Post, User } from '~/shared/model';

export type GetCommentsByPostRequest = Post['id'];
export type GetCommentsByPostResponse = Comment[];

export type GetCommentsByUserRequest = User['id'];
export type GetCommentsByUserResponse = Comment[];

export type CreateCommentRequest = Omit<Comment, 'id'>;
export type CreateCommentResponse = Comment;

export type GetCommentsByCommentRequest = Comment['id'];
export type GetCommentsByCommentResponse = Comment[];

export type UpdateParentCommentRequest = Pick<
  Comment,
  'id' | 'hasChildrenComments'
>;
export type UpdateParentCommentResponse = Comment;
