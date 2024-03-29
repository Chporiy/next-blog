import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import routerMock from 'next-router-mock';

import { userMock0 } from '~/tests/mocks';
import { render, screen, waitFor } from '~/tests/utils';

import { Form } from './SignInForm';

describe('<SignInForm />', () => {
  const emailPlaceholder = 'Enter your email';
  const passwordPlaceholder = 'Enter your password';

  beforeEach(() => {
    routerMock.push('/auth/signUp');
  });

  it('should render form', () => {
    render(<Form />);

    expect(document.querySelector('form')).toBeInTheDocument();
  });

  describe('email field', () => {
    it('should contain a placeholder', () => {
      render(<Form />);

      expect(screen.getByPlaceholderText(emailPlaceholder)).toBeInTheDocument();
    });

    it('should contain an error if it`s empty', async () => {
      const { user } = render(<Form />);

      await user.type(screen.getByPlaceholderText(emailPlaceholder), ' ');
      await user.click(document.body);

      expect(screen.getByText('Please enter your email'));
    });

    it('should contain an error if a value is invalid', async () => {
      const { user } = render(<Form />);

      await user.type(screen.getByPlaceholderText(emailPlaceholder), '123');
      await user.click(document.body);

      expect(screen.getByText('Email format is xxx@xx.xx')).toBeInTheDocument();
    });
  });

  describe('password field', () => {
    it('should contain a placeholder', () => {
      render(<Form />);

      expect(
        screen.getByPlaceholderText(passwordPlaceholder),
      ).toBeInTheDocument();
    });

    it('should contain an error if it`s empty', async () => {
      const { user } = render(<Form />);

      await user.type(screen.getByPlaceholderText(passwordPlaceholder), ' ');
      await user.click(document.body);

      expect(screen.getByText('Please enter your password'));
    });

    it('should contain an error if a value is invalid', async () => {
      const { user } = render(<Form />);

      await user.type(screen.getByPlaceholderText(passwordPlaceholder), '123');
      await user.click(document.body);

      expect(
        screen.getByText(
          'Must contain 8 characters, One uppercase, One lowercase, One number and One special case character',
        ),
      ).toBeInTheDocument();
    });
  });

  describe('submitting', () => {
    const fillFields = async (user: UserEvent) => {
      const emailField = screen.getByPlaceholderText(emailPlaceholder);
      const passwordField = screen.getByPlaceholderText(passwordPlaceholder);

      await user.type(emailField, userMock0.email);
      await user.type(passwordField, 'Qwerty123!');
    };

    it('should disable a submitting button if a form is submitting', async () => {
      const { user } = render(<Form />);
      const button = screen.getByRole('button', { name: 'Continue' });

      await fillFields(user);
      await user.click(button);

      expect(button).toHaveAttribute('disabled');
    });

    it('should discard values from fields after succesfull submitting', async () => {
      const { user } = render(<Form />);
      const button = screen.getByRole('button', { name: 'Continue' });
      const emailField = screen.getByPlaceholderText(emailPlaceholder);
      const passwordField = screen.getByPlaceholderText(passwordPlaceholder);

      await fillFields(user);
      await user.click(button);

      await waitFor(() => {
        expect(emailField).toHaveValue('');
        expect(passwordField).toHaveValue('');
      });
    });

    it('should redirect to home page', async () => {
      const { user } = render(<Form />);
      const button = screen.getByRole('button', { name: 'Continue' });

      await fillFields(user);
      await user.click(button);
      await waitFor(() => {
        expect(routerMock).toMatchObject({
          pathname: '/',
        });
      });
    });
  });
});
