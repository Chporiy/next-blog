import { combineReducers } from '@reduxjs/toolkit';

import { authSlice } from '~/entities/auth';

import { baseApi } from '~/shared/api';

export const rootReducer = combineReducers({
  authSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});
