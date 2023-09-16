import { Tabs } from '@chakra-ui/react';

import { userMock0 } from '~/tests/mocks';
import { getUserPostsForTest, render, screen } from '~/tests/utils';
import { getCommentsByUserForTest } from '~/tests/utils/get-comments-by-user-for-test/getPrimaryCommentsByUserForTest';

import { UserActivityInfo } from './UserActivityInfo';

describe('<UserActivityInfo />', () => {
  it('should render a published post amount', async () => {
    render(
      <Tabs>
        <UserActivityInfo userId={userMock0.id} />
      </Tabs>,
    );

    const userPosts = getUserPostsForTest(userMock0.id);
    const postAmount = userPosts.length;

    const publishedPosts = await screen.findByText(
      `${postAmount} published posts`,
    );

    expect(publishedPosts).toBeInTheDocument();
  });

  it('should render a published comment amount', async () => {
    render(
      <Tabs>
        <UserActivityInfo userId={userMock0.id} />
      </Tabs>,
    );

    const userComments = getCommentsByUserForTest(userMock0.id);
    const commentsAmount = userComments.length;

    const publishedComments = await screen.findByText(
      `${commentsAmount} published comments`,
    );

    expect(publishedComments).toBeInTheDocument();
  });
});
