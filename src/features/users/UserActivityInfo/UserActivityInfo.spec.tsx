import { userMock0 } from '../../../../tests/mocks/data/userMocks';
import { render, screen } from '../../../../tests/utils/customRender';
import getUserPostsForTest from '../../../../tests/utils/getUserPostsForTest/getUserPostsFortest';
import UserActivityInfo from './UserActivityInfo';

describe('<UserActivityInfo />', () => {
  it('should render a published post amount', async () => {
    render(<UserActivityInfo userId={userMock0.id} />);

    const userPosts = getUserPostsForTest(userMock0.id);
    const postAmount = userPosts.length;

    const publishedPosts = await screen.findByText(
      `${postAmount} published posts`,
    );

    expect(publishedPosts).toBeInTheDocument();
  });
});
