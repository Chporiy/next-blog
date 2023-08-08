import routerMock from 'next-router-mock';
import UserPage from '../../../src/pages/users/[id]';
import { userMock0 } from '../../mocks/data/userMocks';
import { act, render, screen } from '../../utils/customRender';
import { makeStore } from '../../../src/app/store';
import { getUser } from '../../../src/features/users/usersApi';
import {
  getRunningQueriesThunk,
  resetApiState,
} from '../../../src/app/api/emptyApi';
import getUserPostsForTest from '../../utils/getUserPostsForTest/getUserPostsFortest';

describe('Page User', () => {
  const store = makeStore();

  beforeEach(async () => {
    routerMock.push({
      pathname: '/users/[id]',
      query: { id: userMock0.id.toString() },
    });

    store.dispatch(getUser.initiate(userMock0.id));

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
  });

  afterEach(() => {
    act(() => {
      store.dispatch(resetApiState());
    });
  });

  it('should render an user image', () => {
    render(<UserPage />, { store });

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });

  it('should render an user full name', () => {
    render(<UserPage />, { store });

    const fullName = screen.getByText(userMock0.fullName);

    expect(fullName).toBeInTheDocument();
  });

  it('should render user posts', async () => {
    render(<UserPage />, { store });

    const userPosts = getUserPostsForTest(userMock0.id);

    userPosts.forEach(async (post) => {
      const postTitle = await screen.findByText(post.title);

      expect(postTitle).toBeInTheDocument();
    });
  });

  it('should render an user published post amount', async () => {
    render(<UserPage />, { store });

    const userPosts = getUserPostsForTest(userMock0.id);
    const postAmount = userPosts.length;

    const publishedPosts = await screen.findByText(
      `${postAmount} published posts`,
    );

    expect(publishedPosts).toBeInTheDocument();
  });
});
