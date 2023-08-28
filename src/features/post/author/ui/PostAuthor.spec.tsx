import { rootReducer } from '~/app';

import { postMock0, userMock0 } from '~/tests/mocks';
import { render, screen, waitFor } from '~/tests/utils';

import { convertDateToLocalDate } from '~/shared/lib';

import { Author } from './PostAuthor';

describe('<PostAuthor />', () => {
  it('should render user first and last name', async () => {
    render(<Author post={postMock0} />);

    await waitFor(() => {
      expect(screen.getByText(userMock0.fullName)).toBeInTheDocument();
    });
  });

  it('should render publication date', async () => {
    render(<Author post={postMock0} />);

    await waitFor(() => {
      expect(
        screen.getByText(convertDateToLocalDate(postMock0.date)),
      ).toBeInTheDocument();
    });
  });
});
