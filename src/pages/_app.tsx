import '../styles/globals.css'

import { Provider } from 'react-redux'

import store from '../app/store'
import { AppPropsWithLayout } from './types'

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  )
}
