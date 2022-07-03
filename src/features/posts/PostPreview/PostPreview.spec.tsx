import { render, screen } from '@testing-library/react';
import { Post } from '../types';
import PostPreview from './PostPreview';

describe('<PostPreview />', () => {
  const post: Post = {
    id: 1,
    userId: 1,
    title: 'Title',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut similique excepturi dicta illo voluptatibus? Soluta autem, dolores accusamus vero impedit expedita, ea enim architecto tempore voluptates labore aliquam sed? Accusamus ea autem labore dicta, amet porro repellendus blanditiis delectus debitis iusto harum id laboriosam error unde cupiditate facere deserunt minus',
  };

  it('should be in the document', () => {
    render(<PostPreview post={post} />);

    expect(screen.getByText(post.title)).toBeInTheDocument();
  });

  it('should render truncate a post body', () => {
    render(<PostPreview post={post} />);

    const element = screen.getByText(post.body);
    const style = getComputedStyle(element);

    expect(element).toBeInTheDocument();
    expect(style.overflow).toEqual('hidden');
    expect(style.textOverflow).toEqual('ellipsis');
    expect(style.marginBottom).toEqual('5px');
    expect(style.getPropertyValue('--chakra-line-clamp')).toEqual('1');
  });

  it('should render a link to full post page', () => {
    render(<PostPreview post={post} />);

    const element = document.querySelector(
      `a[href="/posts/${post.id}"]`,
    ) as HTMLAnchorElement;

    expect(element).toBeInTheDocument();
    expect(element.href).toContain(`/posts/${post.id}`);
  });
});
