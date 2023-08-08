import { userMock0 } from '../../../../tests/mocks/data/userMocks';
import { render, screen } from '../../../../tests/utils/customRender';
import UserFullname from './UserFullname';

describe('<UserFullname />', () => {
  it('should render an user fullname', () => {
    render(<UserFullname user={userMock0} />);

    const fullName = screen.getByText(userMock0.fullName);

    expect(fullName).toBeInTheDocument();
  });
});
