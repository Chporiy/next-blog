import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { Post } from './types';

const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ['Post'],
  // eslint-disable-next-line consistent-return
  extractRehydrationInfo: (action, { reducerPath }) => {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
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
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
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
