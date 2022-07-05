import {
  createEntityAdapter,
  createSelector,
  EntityState,
} from '@reduxjs/toolkit';
import emptyApi from '../../app/api/emptyApi';
import { AppState } from '../../app/store';
import { User } from './types';

const usersAdapter = createEntityAdapter<User>();
const initialState = usersAdapter.getInitialState();

const usersApi = emptyApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (buidler) => ({
    getUsers: buidler.query<EntityState<User>, void>({
      query: () => '/users',
      transformResponse: (result: User[]) =>
        usersAdapter.setAll(initialState, result),
    }),
  }),
});

const selectUsersResult = usersApi.endpoints.getUsers.select();
const selectUsersData = createSelector(
  selectUsersResult,
  (result) => result.data,
);

export const { selectById: selectUserById } = usersAdapter.getSelectors(
  (state: AppState) => selectUsersData(state) ?? initialState,
);
export const { useGetUsersQuery } = usersApi;
export const { getUsers } = usersApi.endpoints;

export default usersApi;
