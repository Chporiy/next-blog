import routerMock from 'next-router-mock';

import { rootReducer } from '~/app';

import { postMock0, userMock0 } from '~/tests/mocks';
import { render, screen, waitFor } from '~/tests/utils';

import { postApi } from '~/entities/post';
import { userApi } from '~/entities/user';

import { baseApiUtil } from '~/shared/api';
import { convertDateToLocalDate, makeStore } from '~/shared/lib';

import { Page } from './PostPage';

describe('Page Post', () => {
  const store = makeStore(rootReducer);

  beforeEach(async () => {
    routerMock.push({
      pathname: '/posts/[id]',
      query: { id: '0' },
    });

    store.dispatch(postApi.endpoints.getPost.initiate(postMock0.id));
    store.dispatch(userApi.endpoints.getUsers.initiate());

    await Promise.all(store.dispatch(baseApiUtil.getRunningQueriesThunk()));
  });

  it('should render post page', async () => {
    render(<Page />, { store });

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
