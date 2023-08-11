import routerMock from 'next-router-mock';

import { postMock0 } from '~/tests/mocks';
import { render, screen } from '~/tests/utils';

import PostPreview from './PostPreview';

describe('<PostPreview />', () => {
  const postLink = `/post/${postMock0.id}`;

  it('should be in the document', () => {
    render(<PostPreview post={postMock0} />);

    expect(screen.getByText(postMock0.title)).toBeInTheDocument();
  });

  it('should render a link to full post page', () => {
    render(<PostPreview post={postMock0} />);

    const element = screen.getByRole('link', {
      name: postMock0.title,
    }) as HTMLAnchorElement;

    expect(element).toBeInTheDocument();
    expect(element.href).toContain(postLink);
  });

  it('should redirect to a post page by click on a post title', async () => {
    const { user } = render(<PostPreview post={postMock0} />);

    await user.click(screen.getByRole('link', { name: postMock0.title }));

    expect(routerMock).toMatchObject({
      pathname: postLink,
    });
  });
});
