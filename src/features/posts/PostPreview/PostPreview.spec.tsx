import { screen } from '@testing-library/react';
import routerMock from 'next-router-mock';
import { post } from '../../../../tests/mocks/data';
import { render } from '../../../../tests/utils/customRender';
import PostPreview from './PostPreview';

describe('<PostPreview />', () => {
  const postLink = `/posts/${post.id}`;

  it('should be in the document', () => {
    render(<PostPreview post={post} />);

    expect(screen.getByText(post.title)).toBeInTheDocument();
  });

  it('should render a link to full post page', () => {
    render(<PostPreview post={post} />);

    const element = screen.getByRole('link', {
      name: post.title,
    }) as HTMLAnchorElement;

    expect(element).toBeInTheDocument();
    expect(element.href).toContain(postLink);
  });

  it('should redirect to a post page by click on a post title', async () => {
    const { user } = render(<PostPreview post={post} />);

    await user.click(screen.getByRole('link', { name: post.title }));

    expect(routerMock).toMatchObject({
      pathname: postLink,
    });
  });
});
