import { baseApi } from '~/shared/api';

import {
  GetUserRequest,
  GetUserResponse,
  GetUsersRequest,
  GetUsersResponse,
} from './types';

const userApi = baseApi.injectEndpoints({
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
  userApi;
export { userApi };
