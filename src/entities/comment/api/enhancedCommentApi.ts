import { apiCacher } from '~/shared/api';

import { api } from './commentApi';

const commentApi = api.enhanceEndpoints({
  addTagTypes: ['Comment'],
  endpoints: {
    getPrimaryCommentsByPost: {
      providesTags: apiCacher.providesTagsWithList(['Comment']),
    },
    getCommentsByUser: {
      providesTags: apiCacher.providesTagsWithList(['Comment']),
    },
    createComment: {
      invalidatesTags: apiCacher.invalidatesTagsWithList(['Comment']),
    },
    getCommentsByComment: {
      providesTags: apiCacher.providesTagsWithList(['Comment']),
    },
  },
});

export const {
  useGetPrimaryCommentsByPostQuery,
  useGetCommentsByUserQuery,
  useCreateCommentMutation,
  useGetCommentsByCommentQuery,
} = commentApi;
export { commentApi };
