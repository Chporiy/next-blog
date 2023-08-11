import { baseApi } from '~/shared/api';

import {
  GetUserRequest,
  GetUserResponse,
  GetUsersRequest,
  GetUsersResponse,
} from './types';

const usersApi = baseApi.injectEndpoints({
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

export const { useGetUsersQuery, useLazyGetUserQuery, useGetUserQuery } =
  usersApi;
export const { getUsers, getUser } = usersApi.endpoints;

export default usersApi;
