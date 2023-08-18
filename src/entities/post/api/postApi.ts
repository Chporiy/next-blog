import { baseApi } from '~/shared/api';

import {
  CreatePostRequest,
  CreatePostResponse,
  GetPostRequest,
  GetPostResponse,
  GetPostsByUserRequest,
  GetPostsByUserResponse,
  GetPostsRequest,
  GetPostsResponse,
} from './types';

const api = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (buidler) => ({
    getPosts: buidler.query<GetPostsResponse, GetPostsRequest>({
      query: () => '/posts',
    }),
    getPostsByUser: buidler.query<
      GetPostsByUserResponse,
      GetPostsByUserRequest
    >({
      query: (id) => `/posts?userId=${id}`,
    }),
    getPost: buidler.query<GetPostResponse, GetPostRequest>({
      query: (id) => `/posts/${id}`,
    }),
    createPost: buidler.mutation<CreatePostResponse, CreatePostRequest>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
    }),
  }),
});

export { api };
