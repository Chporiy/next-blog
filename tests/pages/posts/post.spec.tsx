import { screen } from '@testing-library/react';
import routerMock from 'next-router-mock';
import { makeStore } from '../../../src/app/store';
import { getPost } from '../../../src/features/posts/postsApi';
import { getUsers } from '../../../src/features/users/usersApi';
import PostPage from '../../../src/pages/posts/[id]';
import getPostDate from '../../../src/utils/getPostDate/getPostDate';
import { post, user } from '../../mocks/data';
import { render } from '../../utils/customRender';

describe('Page Post', () => {
  const store = makeStore();

  beforeEach(async () => {
    store.dispatch(getPost.initiate('0'));
    store.dispatch(getUsers.initiate());

    routerMock.push({
      pathname: '/posts/[id]',
      query: { id: '0' },
    });
  });

  it('should render post page', () => {
    render(<PostPage />, { store });

    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.body)).toBeInTheDocument();
    expect(screen.getByAltText(post.title)).toBeInTheDocument();
    expect(screen.getByText(user.fullName)).toBeInTheDocument();
    expect(screen.getByText(getPostDate(post.date))).toBeInTheDocument();
  });
});
