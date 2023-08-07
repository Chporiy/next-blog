export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
  date: string;
  preview: string;
};

export type GetPostsRequest = void;
export type GetPostsResponse = Post[];

export type GetPostRequest = Post['id'];
export type GetPostResponse = Post;

export type CreatePostRequest = Omit<Post, 'id'>;
export type CreatePostResponse = Post;
