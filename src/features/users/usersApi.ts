import emptyApi from '../../app/api/emptyApi';
import {
  GetUserPostsRequest,
  GetUserPostsResponse,
  GetUserRequest,
  GetUserResponse,
  GetUsersRequest,
  GetUsersResponse,
} from './types';

const usersApi = emptyApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (buidler) => ({
    getUsers: buidler.query<GetUsersResponse, GetUsersRequest>({
      query: () => '/users',
    }),
    getUser: buidler.query<GetUserResponse, GetUserRequest>({
      query: (id) => `/users/${id}`,
    }),
    getUserPosts: buidler.query<GetUserPostsResponse, GetUserPostsRequest>({
      query: (id) => `/users/${id}/posts`,
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLazyGetUserQuery,
  useGetUserQuery,
  useGetUserPostsQuery,
} = usersApi;
export const { getUsers, getUser } = usersApi.endpoints;

export default usersApi;
