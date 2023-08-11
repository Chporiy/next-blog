import routerMock from 'next-router-mock';

import { userMock0 } from '~/tests/mocks';
import { render, screen, signInForTest } from '~/tests/utils';

import UserPanel from './UserPanel';

describe('<UserPanel />', () => {
  it('should render the authenticated user email', async () => {
    const { store } = render(<UserPanel />);

    await signInForTest(store);

    const authenticatedUser = await screen.findByText(userMock0.email);

    expect(authenticatedUser).toBeInTheDocument();
  });

  it('should render <SignOutButton />', async () => {
    const { store } = render(<UserPanel />);

    await signInForTest(store);

    const signOutButton = await screen.findByRole('button', {
      name: 'Sign out',
    });

    expect(signOutButton).toBeInTheDocument();
  });

  it('should render <CreatePostButton />', async () => {
    const { store } = render(<UserPanel />);

    await signInForTest(store);

    const createPostButton = await screen.findByRole('button', {
      name: 'Create Post',
    });

    expect(createPostButton).toBeInTheDocument();
  });

  it('should navigate to user page by click on email', async () => {
    const { user, store } = render(<UserPanel />);

    await signInForTest(store);

    const authenticatedUser = await screen.findByText(userMock0.email);

    await user.click(authenticatedUser);

    expect(routerMock).toMatchObject({
      pathname: `/user/${userMock0.id}`,
    });
  });
});
