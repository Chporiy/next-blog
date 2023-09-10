import { allPostMocks } from '~/tests/mocks';
import { render, screen } from '~/tests/utils';

import { PostList } from './PostList';

describe('<PostList />', () => {
  it('should render list component', () => {
    render(<PostList posts={allPostMocks} />);

    expect(document.querySelector('ul')).toBeInTheDocument();

    allPostMocks.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });
  });
});
