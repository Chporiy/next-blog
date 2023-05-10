import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import authApi from './authApi';
import { SignUpResponse } from './types';

const initialState = {
  accessToken: '',
  user: null,
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
        state.user = payload.user;
      },
    );
  },
});

export default authSlice.reducer;
