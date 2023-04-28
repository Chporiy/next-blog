import { screen } from '@testing-library/react';
import routerMock from 'next/router';
import { render } from '../../../tests/utils/customRender';
import NextLink from './NextLink';

describe('<NextLink />', () => {
  it('should be in document', () => {
    render(<NextLink next={{ href: 'test' }}>link</NextLink>);

    expect(screen.getByText('link')).toBeInTheDocument();
    expect(screen.getByText('link').getAttribute('href')).toEqual('/test');
  });

  it('should redirect to some path', async () => {
    const { user } = render(<NextLink next={{ href: 'test' }}>link</NextLink>);

    await user.click(screen.getByText('link'));

    expect(routerMock).toMatchObject({
      pathname: '/test',
    });
  });
});
