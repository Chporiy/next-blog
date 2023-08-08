import { screen, waitFor } from '@testing-library/react';
import { render } from '../../../../tests/utils/customRender';
import { makeStore } from '../../../app/store';
import getPostDate from '../../../utils/getPostDate/getPostDate';
import { getUsers } from '../../users/usersApi';
import PostAuthor from './PostAuthor';
import { userMock0 } from '../../../../tests/mocks/data/userMocks';

describe('<PostAuthor />', () => {
  const date = '2022-01-29T06:12:12.829Z';
  const store = makeStore();

  beforeEach(async () => {
    store.dispatch(getUsers.initiate());
  });

  describe('User is defined', () => {
    beforeEach(() => {
      render(<PostAuthor userId={userMock0.id} date={date} />, {
        store,
      });
    });

    it('should render user first and last name', async () => {
      await waitFor(() => {
        expect(screen.getByText(userMock0.fullName)).toBeInTheDocument();
      });
    });

    it('should render user avatar', async () => {
      await waitFor(() => {
        expect(screen.getByRole('img')).toBeInTheDocument();
      });
    });

    it('should render publication date', async () => {
      await waitFor(() => {
        expect(screen.getByText(getPostDate(date))).toBeInTheDocument();
      });
    });
  });

  describe('User isn`t defined', () => {
    beforeEach(() => {
      render(<PostAuthor userId={-1} date={date} />, { store });
    });

    it('should return "User not found"', () => {
      expect(screen.getByText(/User not found/)).toBeInTheDocument();
    });

    it('should render fallback avatar', () => {
      expect(screen.getByRole('img')).toHaveClass('chakra-avatar__svg');
    });
  });
});
