import { rootReducer } from '~/app';

import { userMock0 } from '~/tests/mocks';
import { render, screen, waitFor } from '~/tests/utils';

import { userApi } from '~/entities/user';

import { convertDateToLocalDate, makeStore } from '~/shared/lib';

import PostAuthor from './PostAuthor';

describe('<PostAuthor />', () => {
  const date = '2022-01-29T06:12:12.829Z';
  const store = makeStore(rootReducer);

  beforeEach(async () => {
    store.dispatch(userApi.endpoints.getUsers.initiate());
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
        expect(
          screen.getByText(convertDateToLocalDate(date)),
        ).toBeInTheDocument();
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
