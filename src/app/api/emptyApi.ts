import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const emptyApi = createApi({
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  // eslint-disable-next-line consistent-return
  extractRehydrationInfo: (action, { reducerPath }) => {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});

export const { getRunningOperationPromises } = emptyApi.util;
export default emptyApi;
