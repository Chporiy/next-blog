import { screen, waitFor } from '@testing-library/react';
import routerMock from 'next/router';
import { render } from '../../../tests/utils/customRender';
import Header from './Header';

describe('<Header />', () => {
  it('should render <header /> tag', () => {
    render(<Header />);

    expect(document.querySelector('header')).toBeInTheDocument();
  });

  it('should render logo', () => {
    render(<Header />);

    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });

  it('should redirect to home page by click on logo', async () => {
    routerMock.push('/some_page');

    const { user } = render(<Header />);

    await user.click(screen.getByAltText('logo'));
    await waitFor(() => {
      expect(routerMock).toMatchObject({
        pathname: '/',
      });
    });
  });
});
