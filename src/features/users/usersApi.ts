import emptyApi from '../../app/api/emptyApi';
import { GetUserByIdRequest, User } from './types';

const usersApi = emptyApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (buidler) => ({
    getUsers: buidler.query<User[], void>({
      query: () => '/users',
    }),
    getUserById: buidler.query<User, GetUserByIdRequest>({
      query: ({ id }) => `/users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUserByIdQuery } = usersApi;
export const { getUsers } = usersApi.endpoints;

export default usersApi;
