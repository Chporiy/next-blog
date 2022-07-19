import { screen } from '@testing-library/react';
import { post } from '../../../../tests/mocks/data';
import renderWithStore from '../../../../tests/utils/renderWithStore';
import PostPreview from './PostPreview';

describe('<PostPreview />', () => {
  it('should be in the document', () => {
    renderWithStore(<PostPreview post={post} />);

    expect(screen.getByText(post.title)).toBeInTheDocument();
  });

  it('should render truncate a post body', () => {
    renderWithStore(<PostPreview post={post} />);

    const element = screen.getByText(post.body);
    const style = getComputedStyle(element);

    expect(element).toBeInTheDocument();
    expect(style.overflow).toEqual('hidden');
    expect(style.textOverflow).toEqual('ellipsis');
    expect(style.getPropertyValue('--chakra-line-clamp')).toEqual('1');
  });

  it('should render a link to full post page', () => {
    renderWithStore(<PostPreview post={post} />);

    const element = document.querySelector(
      `a[href="/posts/${post.id}"]`,
    ) as HTMLAnchorElement;

    expect(element).toBeInTheDocument();
    expect(element.href).toContain(`/posts/${post.id}`);
  });
});
