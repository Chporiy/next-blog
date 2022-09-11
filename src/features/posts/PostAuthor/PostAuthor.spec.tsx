import { screen } from '@testing-library/react';
import { user } from '../../../../tests/mocks/data';
import renderWithStore from '../../../../tests/utils/renderWithStore';
import { getRunningOperationPromises } from '../../../app/api/emptyApi';
import { makeStore } from '../../../app/store';
import getPostDate from '../../../utils/getPostDate/getPostDate';
import { getUsers } from '../../users/usersApi';
import PostAuthor from './PostAuthor';

describe('<PostAuthor />', () => {
  const date = '2022-01-29T06:12:12.829Z';
  const store = makeStore();

  beforeEach(async () => {
    store.dispatch(getUsers.initiate());

    await Promise.all(getRunningOperationPromises());
  });

  describe('User is defined', () => {
    beforeEach(() => {
      renderWithStore(<PostAuthor userId={user.id} date={date} />, {
        store,
      });
    });

    it('should render user first and last name', () => {
      expect(screen.getByText(user.fullName)).toBeInTheDocument();
    });

    it('should render user avatar', async () => {
      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('should render publication date', () => {
      expect(screen.getByText(getPostDate(date))).toBeInTheDocument();
    });
  });

  describe('User isn`t defined', () => {
    beforeEach(() => {
      renderWithStore(<PostAuthor userId={-1} date={date} />, { store });
    });

    it('should return "User not found"', () => {
      expect(screen.getByText(/User not found/)).toBeInTheDocument();
    });

    it('should render fallback avatar', () => {
      expect(screen.getByRole('img')).toHaveClass('chakra-avatar__svg');
    });
  });
});
