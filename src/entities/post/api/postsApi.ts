import { apiCacher, baseApi } from '~/shared/api';

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

const postsApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (buidler) => ({
    getPosts: buidler.query<GetPostsResponse, GetPostsRequest>({
      query: () => '/posts',
      providesTags: apiCacher.providesTagsWithList(['Post']),
    }),
    getPostsByUser: buidler.query<
      GetPostsByUserResponse,
      GetPostsByUserRequest
    >({
      query: (id) => `/posts?userId=${id}`,
    }),
    getPost: buidler.query<GetPostResponse, GetPostRequest>({
      query: (id) => `/posts/${id}`,
      providesTags: apiCacher.providesTagsWithList(['Post']),
    }),
    createPost: buidler.mutation<CreatePostResponse, CreatePostRequest>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: apiCacher.invalidatesTagsWithList(['Post']),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useGetPostsByUserQuery,
} = postsApi;
export const { getPosts, getPost, getPostsByUser } = postsApi.endpoints;
