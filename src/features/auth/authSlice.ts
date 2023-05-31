import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import authApi from './authApi';
import { SignUpResponse } from './types';
import type { AppState } from '../../app/store';

const initialState = {
  accessToken: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    set: () => {},
  },
  extraReducers(builder) {
    builder.addCase(HYDRATE, (state, action: AnyAction) => ({
      ...state,
      ...action.payload.authSlice,
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

export const selectAccessToken = (state: AppState) =>
  state.authSlice.accessToken;

export default authSlice.reducer;
