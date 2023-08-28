import { commentMock0, userMock0 } from '~/tests/mocks';
import { render, screen, waitFor } from '~/tests/utils';

import { convertDateToLocalString } from '~/shared/lib';

import { Author } from './CommentAuthor';

describe('<CommentAuthor />', () => {
  it('should render user first and last name', async () => {
    render(<Author comment={commentMock0} />);

    await waitFor(() => {
      expect(screen.getByText(userMock0.fullName)).toBeInTheDocument();
    });
  });

  it('should render publication date', async () => {
    render(<Author comment={commentMock0} />);

    await waitFor(() => {
      expect(
        screen.getByText(convertDateToLocalString(commentMock0.date)),
      ).toBeInTheDocument();
    });
  });
});
