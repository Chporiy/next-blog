import { render, screen } from '~/tests/utils';

import { Post } from '~/entities/post';

import { PostList } from './PostList';

describe('<PostsList />', () => {
  const posts: Post[] = [
    {
      id: 1,
      userId: 1,
      title: 'Title',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut similique excepturi dicta illo voluptatibus? Soluta autem, dolores accusamus vero impedit expedita, ea enim architecto tempore voluptates labore aliquam sed? Accusamus ea autem labore dicta, amet porro repellendus blanditiis delectus debitis iusto harum id laboriosam error unde cupiditate facere deserunt minus',
      date: '2022-01-01T00:00:00.000Z',
      preview: 'preview',
    },
    {
      id: 2,
      userId: 1,
      title: 'Lorem ipsum dolor sit amet',
      body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A obcaecati numquam blanditiis assumenda ut perferendis consequuntur, enim tempora. Dolore harum, nihil odio explicabo nemo vel dolores unde error provident ut?',
      date: '2022-01-01T00:00:00.000Z',
      preview: 'preview',
    },
  ];

  it('should render list component', () => {
    render(<PostList posts={posts} />);

    expect(document.querySelector('ul')).toBeInTheDocument();
    posts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });
  });
});
