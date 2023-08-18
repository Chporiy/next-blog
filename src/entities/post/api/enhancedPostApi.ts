import { apiCacher } from '~/shared/api';

import { api } from './postApi';

const postApi = api.enhanceEndpoints({
  addTagTypes: ['Post'],
  endpoints: {
    getPosts: {
      providesTags: apiCacher.providesTagsWithList(['Post']),
    },
    getPostsByUser: {
      providesTags: apiCacher.cacheByIdArgument(['Post']),
    },
    getPost: {
      providesTags: apiCacher.providesTagsWithList(['Post']),
    },
    createPost: {
      invalidatesTags: apiCacher.invalidatesTagsWithList(['Post']),
    },
  },
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useGetPostsByUserQuery,
} = postApi;
export { postApi };
