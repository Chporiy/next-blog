import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { wrapper } from '../app/store';
import theme from '../utils/theme/theme';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </SessionProvider>
  );
};

export default wrapper.withRedux(App);
