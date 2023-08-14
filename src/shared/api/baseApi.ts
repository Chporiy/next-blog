import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const baseApi = createApi({
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'include',
  }),
  // eslint-disable-next-line consistent-return
  extractRehydrationInfo: (action, { reducerPath }) => {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});

export const {
  getRunningMutationsThunk,
  getRunningQueriesThunk,
  resetApiState,
} = baseApi.util;

export default baseApi;