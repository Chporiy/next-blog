import emptyApi from '../../app/api/emptyApi';
import { User } from './types';

const usersApi = emptyApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (buidler) => ({
    getUsers: buidler.query<User[], void>({
      query: () => '/users',
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
export const { getUsers } = usersApi.endpoints;

export default usersApi;
