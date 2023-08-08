import emptyApi from '../../app/api/emptyApi';
import {
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
  }),
});

export const { useGetUsersQuery, useLazyGetUserQuery } = usersApi;
export const { getUsers } = usersApi.endpoints;

export default usersApi;
