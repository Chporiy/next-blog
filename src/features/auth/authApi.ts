import emptyApi from '../../app/api/emptyApi';
import { SignUpRequest, SignUpResponse } from './types';

const authApi = emptyApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    signUp: builder.mutation<SignUpResponse, SignUpRequest>({
      query: (data) => ({
        url: '/signup',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSignUpMutation } = authApi;
export default authApi;
