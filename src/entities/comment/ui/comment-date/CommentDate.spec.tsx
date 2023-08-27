import { commentMock0 } from '~/tests/mocks';
import { render, screen } from '~/tests/utils';

import { convertDateToLocalString } from '~/shared/lib';

import { Date } from './CommentDate';

describe('<CommentDate />', () => {
  it('should render a comment publication date', () => {
    render(<Date comment={commentMock0} />);

    const publicationDate = screen.getByText(
      convertDateToLocalString(commentMock0.date),
    );

    expect(publicationDate).toBeInTheDocument();
  });
});
