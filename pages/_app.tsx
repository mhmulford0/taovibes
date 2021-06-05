import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import { action, createStore, StoreProvider } from 'easy-peasy'

const store = createStore({
  visbility: false,
  changeVis: action((state) => {
    return !state
  }),
})

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StoreProvider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  )
}

export default MyApp
