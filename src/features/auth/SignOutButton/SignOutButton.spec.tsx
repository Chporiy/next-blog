import { render, screen, waitFor } from '../../../../tests/utils/customRender';
import SignInButton from './SignOutButton';
import signInForTest from '../../../../tests/utils/signInForTest/signInForTest';

describe('<SignOutButton />', () => {
  it('should clear authSlice by click on button', async () => {
    const { user, store } = render(<SignInButton />);
    const button = screen.getByRole('button', { name: 'Sign out' });

    await signInForTest(store);
    await user.click(button);

    await waitFor(() => {
      expect(store.getState().authSlice).toEqual({
        accessToken: '',
      });
    });
  });
});
