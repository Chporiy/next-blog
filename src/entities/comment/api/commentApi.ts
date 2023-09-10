import { baseApi } from '~/shared/api';

import {
  CreateCommentRequest,
  CreateCommentResponse,
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
    createComment: builder.mutation<
      CreateCommentResponse,
      CreateCommentRequest
    >({
      query: (comment) => ({
        url: '/comments',
        method: 'POST',
        body: comment,
      }),
    }),
  }),
});

export { api };
