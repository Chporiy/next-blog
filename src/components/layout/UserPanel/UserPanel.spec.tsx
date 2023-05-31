import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import {
  act,
  render,
  renderHook,
  screen,
} from '../../../../tests/utils/customRender';
import UserPanel from './UserPanel';
import { userMock } from '../../../../tests/mocks/data/userMocks';
import signInForTest from '../../../../tests/utils/signInForTest/signInForTest';

describe('<UserPanel />', () => {
  it('should render the authenticated user email', async () => {
    const { store } = render(<UserPanel />);

    await signInForTest(store);

    const authenticatedUser = await screen.findByText(userMock.email);

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
});
