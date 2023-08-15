import routerMock from 'next-router-mock';

import { rootReducer } from '~/app';

import { userMock0 } from '~/tests/mocks';
import { act, getUserPostsForTest, render, screen } from '~/tests/utils';

import { userApi } from '~/entities/user';

import { baseApiUtil } from '~/shared/api';
import { makeStore } from '~/shared/lib';

import { Page } from './UserPage';

describe('Page User', () => {
  const store = makeStore(rootReducer);

  beforeEach(async () => {
    routerMock.push({
      pathname: '/users/[id]',
      query: { id: userMock0.id.toString() },
    });

    store.dispatch(userApi.endpoints.getUser.initiate(userMock0.id));

    await Promise.all(store.dispatch(baseApiUtil.getRunningQueriesThunk()));
  });

  afterEach(() => {
    act(() => {
      store.dispatch(baseApiUtil.resetApiState());
    });
  });

  it('should render an user image', () => {
    render(<Page />, { store });

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });

  it('should render an user full name', () => {
    render(<Page />, { store });

    const fullName = screen.getByText(userMock0.fullName);

    expect(fullName).toBeInTheDocument();
  });

  it('should render user posts', async () => {
    render(<Page />, { store });

    const userPosts = getUserPostsForTest(userMock0.id);

    userPosts.forEach(async (post) => {
      const postTitle = await screen.findByText(post.title);

      expect(postTitle).toBeInTheDocument();
    });
  });

  it('should render an user published post amount', async () => {
    render(<Page />, { store });

    const userPosts = getUserPostsForTest(userMock0.id);
    const postAmount = userPosts.length;

    const publishedPosts = await screen.findByText(
      `${postAmount} published posts`,
    );

    expect(publishedPosts).toBeInTheDocument();
  });
});
