import routerMock from 'next-router-mock';

import { rootReducer } from '~/app';

import { postMock0, userMock0 } from '~/tests/mocks';
import { render, screen, waitFor } from '~/tests/utils';

import { postApi } from '~/entities/post';
import { getUsers } from '~/entities/user';

import { getRunningQueriesThunk } from '~/shared/api';
import { convertDateToLocalDate, makeStore } from '~/shared/lib';

import { PostPage } from './PostPage';

describe('Page Post', () => {
  const store = makeStore(rootReducer);

  beforeEach(async () => {
    routerMock.push({
      pathname: '/posts/[id]',
      query: { id: '0' },
    });

    store.dispatch(postApi.endpoints.getPost.initiate(postMock0.id));
    store.dispatch(getUsers.initiate());

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
  });

  it('should render post page', async () => {
    render(<PostPage />, { store });

    await waitFor(() => {
      expect(screen.getByText(postMock0.title)).toBeInTheDocument();
      expect(screen.getByText(postMock0.body)).toBeInTheDocument();
      expect(screen.getByAltText(postMock0.title)).toBeInTheDocument();
      expect(screen.getByText(userMock0.fullName)).toBeInTheDocument();
      expect(
        screen.getByText(convertDateToLocalDate(postMock0.date)),
      ).toBeInTheDocument();
    });
  });
});
