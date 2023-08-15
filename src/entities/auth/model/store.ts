/* eslint-disable no-param-reassign */
import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { authApi } from '../api/authApi';
import { SignUpResponse } from '../api/types';

const initialState = {
  accessToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: () => initialState,
  },
  extraReducers(builder) {
    builder.addCase(HYDRATE, (state, action: AnyAction) => ({
      ...state,
      ...action.payload.auth,
    }));
    builder.addMatcher(
      authApi.endpoints.signUp.matchFulfilled,
      (state, { payload }: PayloadAction<SignUpResponse>) => {
        state.accessToken = payload.accessToken;
      },
    );
    builder.addMatcher(
      authApi.endpoints.signIn.matchFulfilled,
      (state, { payload }: PayloadAction<SignUpResponse>) => {
        state.accessToken = payload.accessToken;
      },
    );
  },
});

export const { reducer, actions } = authSlice;
