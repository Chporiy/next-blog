import { screen, waitFor } from '@testing-library/react';
import routerMock from 'next-router-mock';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { render } from '../../../../tests/utils/customRender';
import { user as mockUser } from '../../../../tests/mocks/data';
import SignUpForm from './SignUpForm';

describe('<SignUpForm />', () => {
  const emailPlaceholder = 'Enter your email';
  const passwordPlaceholder = 'Enter your password';
  const fullNamePlaceholder = 'Enter your full name';

  beforeEach(() => {
    routerMock.push('/auth/signUp');
  });

  it('should render form', () => {
    render(<SignUpForm />);

    expect(document.querySelector('form')).toBeInTheDocument();
  });

  describe('email field', () => {
    it('should contain a placeholder', () => {
      render(<SignUpForm />);

      expect(screen.getByPlaceholderText(emailPlaceholder)).toBeInTheDocument();
    });

    it('should contain an error if it`s empty', async () => {
      const { user } = render(<SignUpForm />);

      await user.type(screen.getByPlaceholderText(emailPlaceholder), ' ');
      await user.click(document.body);

      expect(screen.getByText('Please enter your email'));
    });

    it('should contain an error if a value is invalid', async () => {
      const { user } = render(<SignUpForm />);

      await user.type(screen.getByPlaceholderText(emailPlaceholder), '123');
      await user.click(document.body);

      expect(screen.getByText('Email format is xxx@xx.xx')).toBeInTheDocument();
    });
  });

  describe('password field', () => {
    it('should contain a placeholder', () => {
      render(<SignUpForm />);

      expect(
        screen.getByPlaceholderText(passwordPlaceholder),
      ).toBeInTheDocument();
    });

    it('should contain an error if it`s empty', async () => {
      const { user } = render(<SignUpForm />);

      await user.type(screen.getByPlaceholderText(passwordPlaceholder), ' ');
      await user.click(document.body);

      expect(screen.getByText('Please enter your password'));
    });

    it('should contain an error if a value is invalid', async () => {
      const { user } = render(<SignUpForm />);

      await user.type(screen.getByPlaceholderText(passwordPlaceholder), '123');
      await user.click(document.body);

      expect(
        screen.getByText(
          'Must contain 8 characters, One uppercase, One lowercase, One number and One special case character',
        ),
      ).toBeInTheDocument();
    });
  });

  describe('full name field', () => {
    it('should contain a placeholder', () => {
      render(<SignUpForm />);

      expect(
        screen.getByPlaceholderText(fullNamePlaceholder),
      ).toBeInTheDocument();
    });

    it('should contain an error if it`s empty', async () => {
      const { user } = render(<SignUpForm />);

      await user.type(screen.getByPlaceholderText(fullNamePlaceholder), ' ');
      await user.click(document.body);

      expect(screen.getByText('Please enter your full name'));
    });

    it('should contain an error if a value is invalid', async () => {
      const { user } = render(<SignUpForm />);

      await user.type(screen.getByPlaceholderText(fullNamePlaceholder), '123');
      await user.click(document.body);

      expect(
        screen.getByText(
          'Must contains letters and should contians spaces, commas, dots, dashes',
        ),
      ).toBeInTheDocument();
    });
  });

  describe('submitting', () => {
    const fillFields = async (user: UserEvent) => {
      const emailField = screen.getByPlaceholderText(emailPlaceholder);
      const passwordField = screen.getByPlaceholderText(passwordPlaceholder);
      const fullNameField = screen.getByPlaceholderText(fullNamePlaceholder);

      await user.type(emailField, mockUser.email);
      await user.type(passwordField, 'Qwerty123!');
      await user.type(fullNameField, mockUser.fullName);
    };

    it('should disable a submitting button if a form is submitting', async () => {
      const { user } = render(<SignUpForm />);
      const button = screen.getByRole('button', { name: 'Continue' });

      await fillFields(user);
      await user.click(button);

      expect(button).toHaveAttribute('disabled');
    });

    it('should show a submitting status', async () => {
      const { user } = render(<SignUpForm />);
      const button = screen.getByRole('button', { name: 'Continue' });

      await fillFields(user);
      await user.click(button);

      expect(screen.getByText('Submitting')).toBeInTheDocument();
    });

    it('should discard values from fields after succesfull submitting', async () => {
      const { user } = render(<SignUpForm />);
      const button = screen.getByRole('button', { name: 'Continue' });
      const emailField = screen.getByPlaceholderText(emailPlaceholder);
      const passwordField = screen.getByPlaceholderText(passwordPlaceholder);
      const fullNameField = screen.getByPlaceholderText(fullNamePlaceholder);

      await fillFields(user);
      await user.click(button);

      await waitFor(() => {
        expect(emailField).toHaveValue('');
        expect(passwordField).toHaveValue('');
        expect(fullNameField).toHaveValue('');
      });
    });

    it('should redirect to home page', async () => {
      const { user } = render(<SignUpForm />);
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
