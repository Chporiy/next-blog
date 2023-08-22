import { baseApi } from '~/shared/api';

import {
  GetCommentsByPostRequest,
  GetCommentsByPostResponse,
  GetCommentsByUserRequest,
  GetCommentsByUserResponse,
} from './types';

const api = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getCommentsByPost: builder.query<
      GetCommentsByPostResponse,
      GetCommentsByPostRequest
    >({
      query: (id) => `/comments?postId=${id}`,
    }),
    getCommentsByUser: builder.query<
      GetCommentsByUserResponse,
      GetCommentsByUserRequest
    >({
      query: (id) => `/comments?userId=${id}`,
    }),
  }),
});

export { api };
