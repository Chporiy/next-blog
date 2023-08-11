import { ChakraProvider } from '@chakra-ui/react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';

import { rootReducer } from '~/app';

import { AppStore, makeStore } from '~/shared/lib';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: AppStore;
}

const customRender = (
  ui: ReactElement,
  {
    store = makeStore(rootReducer),
    ...renderOptions
  }: ExtendedRenderOptions = {},
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
