import { screen } from '@testing-library/react';
import routerMock from 'next-router-mock';
import { render } from '../../../../tests/utils/customRender';
import PostPreview from './PostPreview';
import { postMock0 } from '../../../../tests/mocks/data/postMocks';

describe('<PostPreview />', () => {
  const postLink = `/posts/${postMock0.id}`;

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
