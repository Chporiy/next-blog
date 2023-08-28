import { userMock0 } from '~/tests/mocks';
import { render, screen, waitFor } from '~/tests/utils';

import { Author } from './Author';

describe('<Author />', () => {
  const date = '2022-01-29T06:12:12.829Z';

  const Date = () => <>2022-01-29T06:12:12.829Z</>;

  describe('User is defined', () => {
    beforeEach(() => {
      render(<Author id={userMock0.id} slots={{ date: <Date /> }} />);
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

    it('should render date', async () => {
      await waitFor(() => {
        expect(screen.getByText(date)).toBeInTheDocument();
      });
    });
  });

  describe('User isn`t defined', () => {
    it('should return "User not found"', () => {
      render(<Author id={-1} slots={{ date: <Date /> }} />);

      expect(screen.getByText(/User not found/)).toBeInTheDocument();
    });
  });
});
