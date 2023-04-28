// eslint-disable-next-line import/no-extraneous-dependencies
import { ChakraProvider } from '@chakra-ui/react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { AppStore, makeStore } from '../../src/app/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: AppStore;
}

const customRender = (
  ui: ReactElement,
  { store = makeStore(), ...renderOptions }: ExtendedRenderOptions = {},
) => {
  const wrapper = ({ children }: PropsWithChildren) => (
    <MemoryRouterProvider>
      <Provider store={store}>
        <ChakraProvider>{children}</ChakraProvider>
      </Provider>
    </MemoryRouterProvider>
  );

  return {
    store,
    user: userEvent.setup(),
    ...render(ui, { wrapper, ...renderOptions }),
  };
};

export * from '@testing-library/react';
export { customRender as render };
