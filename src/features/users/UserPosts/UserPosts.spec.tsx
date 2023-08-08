import { userMock0 } from '../../../../tests/mocks/data/userMocks';
import { render, screen } from '../../../../tests/utils/customRender';
import getUserPostsForTest from '../../../../tests/utils/getUserPostsForTest/getUserPostsForTest';
import UserPosts from './UserPosts';

describe('<UserPosts />', () => {
  it('should render posts by an user', () => {
    render(<UserPosts userId={userMock0.id} />);

    const userPosts = getUserPostsForTest(userMock0.id);

    userPosts.forEach(async (post) => {
      const postTitle = await screen.findByText(post.title);

      expect(postTitle).toBeInTheDocument();
    });
  });
});
