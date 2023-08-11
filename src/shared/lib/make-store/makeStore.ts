import {
  configureStore,
  ThunkAction,
  Action,
  ConfigureStoreOptions,
} from '@reduxjs/toolkit';
import { nextReduxCookieMiddleware } from 'next-redux-cookie-wrapper';

import { baseApi } from '~/shared/api';

export const makeStore = (reducer: ConfigureStoreOptions['reducer']) =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .prepend(
          nextReduxCookieMiddleware({
            subtrees: [
              {
                subtree: 'authSlice.accessToken',
                deserializationFunction: (string) => string,
                serializationFunction: (string) => string as string,
              },
            ],
          }),
        )
        .concat(baseApi.middleware),
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
