import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Nav from '../components/Nav'
import ParticlesBG from '../components/ParticlesBG'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Provider store={store}>
        <Nav />
        <ParticlesBG />
        <Component {...pageProps} />
      </Provider>
    </AnimatePresence>
  )
}

export default MyApp
