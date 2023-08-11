import { render, screen } from '~/tests/utils';

import { CreatePostPage } from './CreatePostPage';

describe('Page CreatePost', () => {
  it('should render createPost page', () => {
    render(<CreatePostPage />);

    expect(screen.getByText('Create your post')).toBeInTheDocument();
    expect(document.querySelector('form')).toBeInTheDocument();
  });
});
