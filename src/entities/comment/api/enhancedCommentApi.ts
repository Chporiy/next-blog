import { apiCacher } from '~/shared/api';

import { api } from './commentApi';

const commentApi = api.enhanceEndpoints({
  addTagTypes: ['Comment'],
  endpoints: {
    getCommentsByPost: {
      providesTags: apiCacher.cacheByIdArgument(['Comment']),
    },
    getCommentsByUser: {
      providesTags: apiCacher.cacheByIdArgument(['Comment']),
    },
  },
});

export const { useGetCommentsByPostQuery, useGetCommentsByUserQuery } =
  commentApi;
export { commentApi };
