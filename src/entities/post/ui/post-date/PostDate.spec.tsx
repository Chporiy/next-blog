import { postMock0 } from '~/tests/mocks';
import { render, screen } from '~/tests/utils';

import { convertDateToLocalDate } from '~/shared/lib';

import { Date } from './PostDate';

describe('<PostDate />', () => {
  it('should render a post publication date', () => {
    render(<Date post={postMock0} />);

    const publicationDate = screen.getByText(
      convertDateToLocalDate(postMock0.date),
    );

    expect(publicationDate).toBeInTheDocument();
  });
});
