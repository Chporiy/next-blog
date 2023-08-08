import routerMock from 'next-router-mock';
import { userMock0 } from '../../../../tests/mocks/data/userMocks';
import { render, screen } from '../../../../tests/utils/customRender';
import UserAvatar from './UserAvatar';

describe('<UserAvatar />', () => {
  const getImage = () => screen.getByRole('img');

  it('should render an user image', () => {
    render(<UserAvatar user={userMock0} />);

    const image = getImage();

    expect(image).toBeInTheDocument();
  });

  it('should navigate to user page', async () => {
    const { user } = render(<UserAvatar user={userMock0} />);
    const image = getImage();

    await user.click(image);

    expect(routerMock).toMatchObject({
      pathname: `/users/${userMock0.id}`,
    });
  });
});
