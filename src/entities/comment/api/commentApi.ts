import { baseApi } from '~/shared/api';

import {
  CreateCommentRequest,
  CreateCommentResponse,
  GetCommentsByCommentRequest,
  GetCommentsByCommentResponse,
  GetCommentsByPostRequest,
  GetCommentsByPostResponse,
  GetCommentsByUserRequest,
  GetCommentsByUserResponse,
  UpdateParentCommentRequest,
  UpdateParentCommentResponse,
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
      GetCommentsByCommentRequest
    >({
      query: (id) => `/comments/${id}/comments`,
    }),
    updateParentComment: builder.mutation<
      UpdateParentCommentResponse,
      UpdateParentCommentRequest
    >({
      query: ({ id, childrenCommentsAmount }) => ({
        url: `/comments/${id}`,
        method: 'PATCH',
        body: {
          childrenCommentsAmount,
        },
      }),
    }),
  }),
});

export { api };
