import {
  CreatePostRequest,
  CreatePostResponse,
  GetPostRequest,
  GetPostResponse,
  GetPostsRequest,
  GetPostsResponse,
} from './types';
import emptyApi from '../../app/api/emptyApi';
import apiCacher from '../../utils/rtkQueryCacheUtils/apiCacher';

const postsApi = emptyApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (buidler) => ({
    getPosts: buidler.query<GetPostsResponse, GetPostsRequest>({
      query: () => '/posts',
      providesTags: apiCacher.providesTagsWithList(['Post']),
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

export const { useGetPostsQuery, useGetPostQuery, useCreatePostMutation } =
  postsApi;
export const { getPosts, getPost } = postsApi.endpoints;
export default postsApi;
