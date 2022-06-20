import '../styles/globals.css';
import { AppPropsWithLayout } from './types';
import { wrapper } from '../app/store';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default wrapper.withRedux(App);
