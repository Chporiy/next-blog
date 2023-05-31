import type { NextPage } from 'next';
import type { Router } from 'next/router';

declare module 'next/app' {
  type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
    P,
    IP
  > & {
    getLayout?: (page: ReactElement) => ReactNode;
  };

  type AppProps<P = Record<string, unknown>> = {
    Component: NextPageWithLayout<P>;
    router: Router;
    __N_SSG?: boolean;
    __N_SSP?: boolean;
    pageProps: P;
  };
}
