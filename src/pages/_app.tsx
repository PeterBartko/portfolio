import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      {/* <Nav /> */}
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
