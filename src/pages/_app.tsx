import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '../app/store';
import theme from '../utils/theme/theme';

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>{getLayout(<Component {...props} />)}</Provider>
    </ChakraProvider>
  );
};

export default App;
