import { apiCacher } from '~/shared/api';

import { api } from './commentApi';

const commentApi = api.enhanceEndpoints({
  addTagTypes: ['Comment'],
  endpoints: {
    getCommentsByPost: {
      providesTags: apiCacher.providesTagsWithList(['Comment']),
    },
    getCommentsByUser: {
      providesTags: apiCacher.providesTagsWithList(['Comment']),
    },
    createComment: {
      invalidatesTags: apiCacher.invalidatesTagsWithList(['Comment']),
    },
  },
});

export const {
  useGetCommentsByPostQuery,
  useGetCommentsByUserQuery,
  useCreateCommentMutation,
} = commentApi;
export { commentApi };
