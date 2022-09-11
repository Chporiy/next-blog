/* eslint-disable global-require */
import { screen } from '@testing-library/react';
import singletonRouter from 'next/router';
import renderWithStore from '../../../tests/utils/renderWithStore';
import NextLink from './NextLink';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('<NextLink />', () => {
  it('should be in document', () => {
    renderWithStore(<NextLink next={{ href: 'test' }}>link</NextLink>);

    expect(screen.getByText('link')).toBeInTheDocument();
    expect(screen.getByText('link').getAttribute('href')).toEqual('/test');
  });

  it('should redirect to some path', async () => {
    const { user } = renderWithStore(
      <NextLink next={{ href: 'test' }}>link</NextLink>,
    );

    await user.click(screen.getByText('link'));

    expect(singletonRouter).toMatchObject({
      pathname: '/test',
    });
  });
});
