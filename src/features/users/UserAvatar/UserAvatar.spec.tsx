import { userMock0 } from '../../../../tests/mocks/data/userMocks';
import { render, screen } from '../../../../tests/utils/customRender';
import UserAvatar from './UserAvatar';

describe('<UserAvatar />', () => {
  it('should render an user image', () => {
    render(<UserAvatar user={userMock0} />);

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });
});
