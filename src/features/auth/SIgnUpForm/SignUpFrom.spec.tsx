/* eslint-disable global-require */
import { screen, waitFor } from '@testing-library/react';
import singletonRouter from 'next/router';
import renderWithStore from '../../../../tests/utils/renderWithStore';
import SignUpForm from './SignUpForm';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('<SignUpForm />', () => {
  const emailPlaceholder = 'Enter your email';
  const passwordPlaceholder = 'Enter your password';

  it('should render form', () => {
    renderWithStore(<SignUpForm />);

    expect(document.querySelector('form')).toBeInTheDocument();
  });

  describe('email field', () => {
    it('should contain a placeholder', () => {
      renderWithStore(<SignUpForm />);

      expect(screen.getByPlaceholderText(emailPlaceholder)).toBeInTheDocument();
    });

    it('should contain an error if it`s empty', async () => {
      const { user } = renderWithStore(<SignUpForm />);

      await user.type(screen.getByPlaceholderText(emailPlaceholder), ' ');
      await user.click(document.body);

      expect(screen.getByText('Please enter your email'));
    });

    it('should contain an error if a value is invalid', async () => {
      const { user } = renderWithStore(<SignUpForm />);

      await user.type(screen.getByPlaceholderText(emailPlaceholder), '123');
      await user.click(document.body);

      expect(screen.getByText('Email format is xxx@xx.xx')).toBeInTheDocument();
    });
  });

  describe('password field', () => {
    it('should contain a placeholder', () => {
      renderWithStore(<SignUpForm />);

      expect(
        screen.getByPlaceholderText(passwordPlaceholder),
      ).toBeInTheDocument();
    });

    it('should contain an error if it`s empty', async () => {
      const { user } = renderWithStore(<SignUpForm />);

      await user.type(screen.getByPlaceholderText(passwordPlaceholder), ' ');
      await user.click(document.body);

      expect(screen.getByText('Please enter your password'));
    });

    it('should contain an error if a value is invalid', async () => {
      const { user } = renderWithStore(<SignUpForm />);

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
    it('should disable a submitting button if a form is submitting', async () => {
      const { user } = renderWithStore(<SignUpForm />);
      const button = screen.getByRole('button', { name: 'Continue' });

      await user.click(button);

      expect(button).toHaveAttribute('disabled');
    });

    it('should show a submitting status', async () => {
      const { user } = renderWithStore(<SignUpForm />);
      const button = screen.getByRole('button', { name: 'Continue' });

      await user.click(button);

      expect(screen.getByText('Submitting')).toBeInTheDocument();
    });

    it('should discard values from fields after succesfull submitting', async () => {
      const { user } = renderWithStore(<SignUpForm />);
      const button = screen.getByRole('button', { name: 'Continue' });
      const emailField = screen.getByPlaceholderText(emailPlaceholder);
      const passwordField = screen.getByPlaceholderText(passwordPlaceholder);

      await user.type(emailField, 'xxx@xx.xx');
      await user.type(passwordField, 'Qwerty123!');
      await user.click(button);

      await waitFor(() => {
        expect(emailField).toHaveValue('');
        expect(passwordField).toHaveValue('');
      });
    });

    it('should redirect to home page', async () => {
      const { user } = renderWithStore(<SignUpForm />);
      const button = screen.getByRole('button', { name: 'Continue' });

      await user.click(button);
      await waitFor(() => {
        expect(singletonRouter).toMatchObject({
          pathname: '/',
        });
      });
    });
  });
});
