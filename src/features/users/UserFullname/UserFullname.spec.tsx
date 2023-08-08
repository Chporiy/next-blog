import routerMock from 'next-router-mock';
import { userMock0 } from '../../../../tests/mocks/data/userMocks';
import { render, screen } from '../../../../tests/utils/customRender';
import UserFullname from './UserFullname';

describe('<UserFullname />', () => {
  const getFullname = () => screen.getByText(userMock0.fullName);

  it('should render an user fullname', () => {
    render(<UserFullname user={userMock0} />);

    const fullName = getFullname();

    expect(fullName).toBeInTheDocument();
  });

  it('should navigate to user page', async () => {
    const { user } = render(<UserFullname user={userMock0} />);
    const fullname = getFullname();

    await user.click(fullname);

    expect(routerMock).toMatchObject({
      pathname: `/users/${userMock0.id}`,
    });
  });
});
