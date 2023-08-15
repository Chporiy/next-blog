import routerMock from 'next-router-mock';

import { userMock0 } from '~/tests/mocks';
import { render, screen } from '~/tests/utils';

import { Avatar } from './UserAvatar';

describe('<UserAvatar />', () => {
  const getImage = () => screen.getByRole('img');

  it('should render an user image', () => {
    render(<Avatar user={userMock0} />);

    const image = getImage();

    expect(image).toBeInTheDocument();
  });

  it('should navigate to user page', async () => {
    const { user } = render(<Avatar user={userMock0} />);
    const image = getImage();

    await user.click(image);

    expect(routerMock).toMatchObject({
      pathname: `/user/${userMock0.id}`,
    });
  });
});
