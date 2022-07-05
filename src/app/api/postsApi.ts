import { Post } from '../../features/posts/types';
import emptyApi from './emptyApi';

const postsApi = emptyApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (buidler) => ({
    getPosts: buidler.query<Post[], null>({
      query: () => '/posts',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ id, type: 'Post' as const })),
              { type: 'Post', id: 'LIST' },
            ]
          : [{ type: 'Post', id: 'LIST' }],
    }),
    getPost: buidler.query<Post, string>({
      query: (id) => `/posts/${id}`,
      providesTags: (result, error, id) => [{ id, type: 'Post' }],
    }),
    addPost: buidler.mutation<Response, Omit<Post, 'id'>>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation } =
  postsApi;
export const { getPosts, getPost } = postsApi.endpoints;
export const { getRunningOperationPromises } = postsApi.util;
export default postsApi;
