import { render, screen } from '~/tests/utils';

import { Page } from './CreatePostPage';

describe('Page CreatePost', () => {
  it('should render createPost page', () => {
    render(<Page />);

    expect(screen.getByText('Create your post')).toBeInTheDocument();
    expect(document.querySelector('form')).toBeInTheDocument();
  });
});
