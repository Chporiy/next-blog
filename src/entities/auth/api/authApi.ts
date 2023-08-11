import Cookies from 'js-cookie';

import baseApi from '~/shared/api/baseApi';

import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from './types';

const authApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    signUp: builder.mutation<SignUpResponse, SignUpRequest>({
      query: (data) => ({
        url: '/signup',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, api) {
        const { data } = await api.queryFulfilled;

        Cookies.set('authSlice.accessToken', data.accessToken);
      },
    }),
    signIn: builder.mutation<SignInResponse, SignInRequest>({
      query: (data) => ({
        url: '/signin',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, api) {
        const { data } = await api.queryFulfilled;

        Cookies.set('authSlice.accessToken', data.accessToken);
      },
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
export default authApi;
