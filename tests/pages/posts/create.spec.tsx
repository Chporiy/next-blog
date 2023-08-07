import CreatePost from '../../../src/pages/posts/create';
import { render, screen } from '../../utils/customRender';

describe('Page CreatePost', () => {
  it('should render createPost page', () => {
    render(<CreatePost />);

    expect(screen.getByText('Create your post')).toBeInTheDocument();
    expect(document.querySelector('form')).toBeInTheDocument();
  });
});
