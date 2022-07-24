/* eslint-disable global-require */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import singletonRouter from 'next/router';
import { post } from '../../../../tests/mocks/data';
import renderWithStore from '../../../../tests/utils/renderWithStore';
import PostPreview from './PostPreview';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('<PostPreview />', () => {
  const postLink = `/posts/${post.id}`;

  it('should be in the document', () => {
    renderWithStore(<PostPreview post={post} />);

    expect(screen.getByText(post.title)).toBeInTheDocument();
  });

  it('should render a link to full post page', () => {
    renderWithStore(<PostPreview post={post} />);

    const element = screen.getByRole('link', {
      name: post.title,
    }) as HTMLAnchorElement;

    expect(element).toBeInTheDocument();
    expect(element.href).toContain(postLink);
  });

  it('should redirect to a post page by click on a post title', async () => {
    const user = userEvent.setup();

    renderWithStore(<PostPreview post={post} />);

    await user.click(screen.getByRole('link', { name: post.title }));

    expect(singletonRouter).toMatchObject({
      pathname: postLink,
    });
  });
});
