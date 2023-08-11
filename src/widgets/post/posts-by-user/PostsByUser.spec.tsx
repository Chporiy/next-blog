import { userMock0 } from '~/tests/mocks';
import { getUserPostsForTest, render, screen } from '~/tests/utils';

import PostsByUser from './PostsByUser';

describe('<PostsByUser />', () => {
  it('should render posts by an user', () => {
    render(<PostsByUser userId={userMock0.id} />);

    const userPosts = getUserPostsForTest(userMock0.id);

    userPosts.forEach(async (post) => {
      const postTitle = await screen.findByText(post.title);

      expect(postTitle).toBeInTheDocument();
    });
  });
});
