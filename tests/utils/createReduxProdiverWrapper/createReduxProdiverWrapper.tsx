import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { AppStore } from '../../../src/app/store';

/**
 * Return a redux provider function creator
 *
 * @param {AppStore} store - default redux store
 * @returns
 */
const createReduxProdiverWrapper = (store: AppStore) =>
  function Wrapper({ children }: PropsWithChildren<unknown>) {
    return <Provider store={store}>{children}</Provider>;
  };

export default createReduxProdiverWrapper;
