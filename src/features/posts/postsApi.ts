import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { Post } from './types';

const postsApi = createApi({
  reducerPath: 'postsApi',
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
    }),
    getPost: buidler.query<Post, string>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = postsApi;
export const { getPosts, getPost } = postsApi.endpoints;
export const { getRunningOperationPromises } = postsApi.util;
export default postsApi;
