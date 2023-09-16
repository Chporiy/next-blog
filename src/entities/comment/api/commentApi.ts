import { baseApi } from '~/shared/api';

import {
  CreateCommentRequest,
  CreateCommentResponse,
  GetCommentsByComemntRequest,
  GetCommentsByCommentResponse,
  GetCommentsByPostRequest,
  GetCommentsByPostResponse,
  GetCommentsByUserRequest,
  GetCommentsByUserResponse,
} from './types';

const api = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getPrimaryCommentsByPost: builder.query<
      GetCommentsByPostResponse,
      GetCommentsByPostRequest
    >({
      query: (id) => `/comments?postId=${id}&commentId=`,
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
    getCommentsByComment: builder.query<
      GetCommentsByCommentResponse,
      GetCommentsByComemntRequest
    >({
      query: (id) => `/comments/${id}/comments`,
    }),
  }),
});

export { api };
