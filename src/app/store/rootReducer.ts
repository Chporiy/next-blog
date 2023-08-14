import { combineReducers } from '@reduxjs/toolkit';

import { authModel } from '~/entities/auth';

import { baseApi } from '~/shared/api';

export const rootReducer = combineReducers({
  auth: authModel.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
