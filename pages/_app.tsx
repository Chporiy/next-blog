import { AppProps } from 'next/app';

import { ChakraProvider, ReduxProvoder, nextReduxWrapper } from '~/app';

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  const { store, props } = nextReduxWrapper.useWrappedStore(pageProps);
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ChakraProvider>
      <ReduxProvoder store={store}>
        {getLayout(<Component {...props} />)}
      </ReduxProvoder>
    </ChakraProvider>
  );
};

export default App;
