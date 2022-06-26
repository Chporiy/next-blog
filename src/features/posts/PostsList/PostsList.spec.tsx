import { render, screen } from '@testing-library/react';
import { Post } from '../types';
import PostsList from './PostsList';

describe('<PostsList />', () => {
  const posts: Post[] = [
    {
      id: 1,
      userId: 1,
      title: 'Title',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut similique excepturi dicta illo voluptatibus? Soluta autem, dolores accusamus vero impedit expedita, ea enim architecto tempore voluptates labore aliquam sed? Accusamus ea autem labore dicta, amet porro repellendus blanditiis delectus debitis iusto harum id laboriosam error unde cupiditate facere deserunt minus',
    },
    {
      id: 2,
      userId: 1,
      title: 'Lorem ipsum dolor sit amet',
      body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A obcaecati numquam blanditiis assumenda ut perferendis consequuntur, enim tempora. Dolore harum, nihil odio explicabo nemo vel dolores unde error provident ut?',
    },
  ];

  it('should render list component', () => {
    render(<PostsList posts={posts} />);

    expect(document.querySelector('ul')).toBeInTheDocument();
  });

  describe('ListItem', () => {
    it('should render a title', () => {
      render(<PostsList posts={posts} />);

      posts.forEach((post) => {
        expect(screen.getByText(post.title)).toBeInTheDocument();
      });
    });

    it('should render truncate a post body', () => {
      render(<PostsList posts={posts} />);

      posts.forEach((post) => {
        const element = screen.getByText(post.body);
        const style = getComputedStyle(element);

        expect(element).toBeInTheDocument();
        expect(style.overflow).toEqual('hidden');
        expect(style.textOverflow).toEqual('ellipsis');
        expect(style.marginBottom).toEqual('5px');
        expect(style.getPropertyValue('--chakra-line-clamp')).toEqual('1');
      });
    });

    it('should render a link to full post page', () => {
      render(<PostsList posts={posts} />);

      posts.forEach((post) => {
        const element = document.querySelector(
          `a[href="/posts/${post.id}"]`,
        ) as HTMLAnchorElement;

        expect(element).toBeInTheDocument();
        expect(element.href).toContain(`/posts/${post.id}`);
      });
    });
  });
});
