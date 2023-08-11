import { AppState } from '~/shared/lib';

export const selectAccessToken = (state: AppState) =>
  state.authSlice.accessToken;
