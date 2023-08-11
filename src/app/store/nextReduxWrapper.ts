import { wrapMakeStore } from 'next-redux-cookie-wrapper';
import { createWrapper } from 'next-redux-wrapper';

import { makeStore } from '~/shared/lib';

import { rootReducer } from './rootReducer';

const makeStoreWithArgs = () => makeStore(rootReducer);

export const nextReduxWrapper = createWrapper(
  wrapMakeStore(makeStoreWithArgs),
  {
    debug: process.env.NODE_ENV === 'development',
  },
);
