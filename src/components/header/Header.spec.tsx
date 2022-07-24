import { screen } from '@testing-library/react';
import renderWithStore from '../../../tests/utils/renderWithStore';
import Header from './Header';

describe('<Header />', () => {
  it('should render <header /> tag', () => {
    renderWithStore(<Header />);

    expect(document.querySelector('header')).toBeInTheDocument();
  });

  it('should render logo', () => {
    renderWithStore(<Header />);

    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});
