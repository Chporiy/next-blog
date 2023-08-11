import { PropsWithChildren } from 'react';

import { ReduxProvoder } from '~/app';

import { AppStore } from '~/shared/lib';

/**
 * Return a redux provider function creator
 *
 * @param {AppStore} store - default redux store
 * @returns
 */
export const createReduxProdiverWrapper = (store: AppStore) =>
  function Wrapper({ children }: PropsWithChildren<unknown>) {
    return <ReduxProvoder store={store}>{children}</ReduxProvoder>;
  };
