import { screen, waitFor } from '@testing-library/react';
import routerMock from 'next-router-mock';
import { getRunningQueriesThunk } from '../../../src/app/api/emptyApi';
import { makeStore } from '../../../src/app/store';
import { getPost } from '../../../src/features/posts/postsApi';
import { getUsers } from '../../../src/features/users/usersApi';
import PostPage from '../../../src/pages/posts/[id]';
import getPostDate from '../../../src/utils/getPostDate/getPostDate';
import { render } from '../../utils/customRender';
import { postMock0 } from '../../mocks/data/postMocks';
import { userMock0 } from '../../mocks/data/userMocks';

describe('Page Post', () => {
  const store = makeStore();

  beforeEach(async () => {
    routerMock.push({
      pathname: '/posts/[id]',
      query: { id: '0' },
    });

    store.dispatch(getPost.initiate(0));
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
      expect(screen.getByText(getPostDate(postMock0.date))).toBeInTheDocument();
    });
  });
});
