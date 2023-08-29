import { allPostMocks } from '~/tests/mocks';
import { render, screen } from '~/tests/utils';

import { AllPosts } from './AllPosts';

describe('<AllPosts />', () => {
  it('should render all posts', async () => {
    render(<AllPosts />);

    allPostMocks.forEach(async (post) => {
      const element = await screen.findByText(post.title);

      expect(element).toBeInTheDocument();
    });
  });
});
