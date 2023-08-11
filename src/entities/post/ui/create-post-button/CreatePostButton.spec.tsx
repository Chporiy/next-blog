import routerMock from 'next-router-mock';

import { render, screen } from '~/tests/utils';

import CreatePostButton from './CreatePostButton';

describe('<CreatePostButton />', () => {
  const getButton = () =>
    screen.getByRole('button', {
      name: 'Create Post',
    });

  it('should render button text', () => {
    render(<CreatePostButton />);

    expect(getButton()).toBeInTheDocument();
  });

  it('should navigate to /posts/create by click on button', async () => {
    const { user } = render(<CreatePostButton />);

    await user.click(getButton());

    expect(routerMock).toMatchObject({
      pathname: '/post/create',
    });
  });
});
