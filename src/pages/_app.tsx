import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '../app/store';
import theme from '../utils/theme/theme';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          {getLayout(<Component {...props.pageProps} />)}
        </Provider>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default App;
