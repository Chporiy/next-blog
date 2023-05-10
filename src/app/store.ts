import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from 'next-redux-cookie-wrapper';
import { createWrapper } from 'next-redux-wrapper';
import emptyApi from './api/emptyApi';
import authSlice from '../features/auth/authSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      authSlice,
      [emptyApi.reducerPath]: emptyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .prepend(
          nextReduxCookieMiddleware({
            subtrees: [
              {
                subtree: 'authSlice.accessToken',
                deserializationFunction: (string) => string,
              },
            ],
          }),
        )
        .concat(emptyApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(wrapMakeStore(makeStore), {
  debug: process.env.NODE_ENV === 'development',
});
