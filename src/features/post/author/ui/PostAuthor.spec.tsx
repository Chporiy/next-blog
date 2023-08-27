import { rootReducer } from '~/app';

import { postMock0, userMock0 } from '~/tests/mocks';
import { render, screen, waitFor } from '~/tests/utils';

import { userApi } from '~/entities/user';

import { convertDateToLocalDate, makeStore } from '~/shared/lib';
import { Post } from '~/shared/model';

import { Author } from './PostAuthor';

describe('<PostAuthor />', () => {
  const date = '2022-01-29T06:12:12.829Z';
  const store = makeStore(rootReducer);

  beforeEach(async () => {
    store.dispatch(userApi.endpoints.getUsers.initiate());
  });

  describe('User is defined', () => {
    beforeEach(() => {
      render(<Author post={postMock0} />, {
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
    it('should return "User not found"', () => {
      const postWithoutUser: Post = {
        ...postMock0,
        userId: -1,
      };

      render(<Author post={postWithoutUser} />, { store });

      expect(screen.getByText(/User not found/)).toBeInTheDocument();
    });
  });
});
