/* eslint-disable global-require */
import { screen } from '@testing-library/react';
import singletonRouter from 'next/router';
import renderWithStore from '../../../tests/utils/renderWithStore';
import Header from './Header';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('<Header />', () => {
  it('should render <header /> tag', () => {
    renderWithStore(<Header />);

    expect(document.querySelector('header')).toBeInTheDocument();
  });

  it('should render logo', () => {
    renderWithStore(<Header />);

    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });

  it('should redirect to home page by click on logo', async () => {
    const { user } = renderWithStore(<Header />);

    await user.click(screen.getByAltText('logo'));

    expect(singletonRouter).toMatchObject({
      pathname: '/',
    });
  });
});
