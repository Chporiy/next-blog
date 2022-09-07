// eslint-disable-next-line import/no-extraneous-dependencies
import { ChakraProvider } from '@chakra-ui/react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { AppStore, makeStore } from '../../src/app/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: AppStore;
}

const renderWithStore = (
  ui: ReactElement,
  { store = makeStore(), ...renderOptions }: ExtendedRenderOptions = {},
) => {
  const wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>
      <ChakraProvider>{children}</ChakraProvider>
    </Provider>
  );

  return {
    store,
    user: userEvent.setup(),
    ...render(ui, { wrapper, ...renderOptions }),
  };
};

export default renderWithStore;
