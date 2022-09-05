import { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import langs from '../utils/langs'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import ContactSection from '../components/ContactSection'

const Contact: NextPage = () => {
  const { lang, transition } = useSelector((state: RootState) => state.nav)

  return (
    <main className="overflow-hidden dark:text-white">
      <Head>
        <title>{'Peter Bartko | ' + langs[lang]['contact']}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <motion.div
        initial={transition ? { y: 300, x: 300 } : { x: 300, y: 0 }}
        animate={{ y: 0, x: 0 }}
        exit={transition ? { y: -300, x: -300 } : { x: 0, y: 0 }}
        className="min-h-screen grid place-content-center p-5"
      >
        <Link href="/">
          <a className="flex items-center w-fit space-x-1 top-3 left-3 fixed">
            <AiOutlineArrowLeft size={18} /> <p>{langs[lang]['back']}</p>
          </a>
        </Link>

        <ContactSection />
      </motion.div>
    </main>
  )
}

export default Contact
