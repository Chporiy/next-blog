import { screen } from '@testing-library/react';
import routerMock from 'next-router-mock';
import { render } from '../../../../tests/utils/customRender';
import PostPreview from './PostPreview';
import { postMock } from '../../../../tests/mocks/data/postMocks';

describe('<PostPreview />', () => {
  const postLink = `/posts/${postMock.id}`;

  it('should be in the document', () => {
    render(<PostPreview post={postMock} />);

    expect(screen.getByText(postMock.title)).toBeInTheDocument();
  });

  it('should render a link to full post page', () => {
    render(<PostPreview post={postMock} />);

    const element = screen.getByRole('link', {
      name: postMock.title,
    }) as HTMLAnchorElement;

    expect(element).toBeInTheDocument();
    expect(element.href).toContain(postLink);
  });

  it('should redirect to a post page by click on a post title', async () => {
    const { user } = render(<PostPreview post={postMock} />);

    await user.click(screen.getByRole('link', { name: postMock.title }));

    expect(routerMock).toMatchObject({
      pathname: postLink,
    });
  });
});
