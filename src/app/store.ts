import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from 'next-redux-cookie-wrapper';
import { createWrapper } from 'next-redux-wrapper';
import postsApi from '../features/posts/postsApi';

export const makeStore = () =>
  configureStore({
    reducer: {
      [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .prepend(
          nextReduxCookieMiddleware({
            subtrees: [''],
          }),
        )
        .concat(postsApi.middleware),
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

export const wrapper = createWrapper(wrapMakeStore(makeStore));
