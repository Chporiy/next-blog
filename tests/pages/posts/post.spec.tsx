import singletonRouter from 'next/router';
import { getRunningOperationPromises } from '../../../src/app/api/emptyApi';
import { makeStore } from '../../../src/app/store';
import { getPost } from '../../../src/features/posts/postsApi';
import PostPage from '../../../src/pages/posts/[id]';
import renderWithStore from '../../utils/renderWithStore';

// eslint-disable-next-line global-require
jest.mock('next/router', () => require('next-router-mock'));

describe('Page Post', () => {
  const store = makeStore();

  beforeEach(async () => {
    store.dispatch(getPost.initiate('0'));

    await Promise.all(getRunningOperationPromises());
  });

  it('should render post page', () => {
    singletonRouter.push({
      pathname: '/posts/[id]',
      query: { id: '0' },
    });

    const { debug } = renderWithStore(<PostPage />, { store });

    debug();
  });
});
