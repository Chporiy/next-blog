import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { AppPropsWithLayout } from './types';
import { wrapper } from '../app/store';
import theme from '../utils/theme/theme';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
};

export default wrapper.withRedux(App);
