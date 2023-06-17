import { Post } from './types';
import emptyApi from '../../app/api/emptyApi';
import apiCacher from '../../utils/rtkQueryCacheUtils/apiCacher';

const postsApi = emptyApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (buidler) => ({
    getPosts: buidler.query<Post[], void>({
      query: () => '/posts',
      providesTags: apiCacher.providesTagsWithList(['Post']),
    }),
    getPost: buidler.query<Post, string>({
      query: (id) => `/posts/${id}`,
      providesTags: apiCacher.providesTagsWithList(['Post']),
    }),
    addPost: buidler.mutation<Response, Omit<Post, 'id'>>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: apiCacher.invalidatesTagsWithList(['Post']),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation } =
  postsApi;
export const { getPosts, getPost } = postsApi.endpoints;
export default postsApi;
