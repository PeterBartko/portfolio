import { NextPage } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import langs from '../utils/langs'
import Head from 'next/head'
import { toggleTransition } from '../redux/navSlice'
import ProjectsSection from '../components/ProjectsSection'

const Projects: NextPage = () => {
  const { lang, transition } = useSelector((state: RootState) => state.nav)
  const dispatch = useDispatch()

  return (
    <main className="overflow-hidden dark:text-white py-8">
      <Head>
        <title>{'Peter Bartko | ' + langs[lang]['projects']}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <motion.div
        initial={transition ? { y: 300, x: -300 } : { x: 300, y: 0 }}
        animate={{ y: 0, x: 0 }}
        exit={transition ? { y: -300, x: 300 } : { x: 0, y: 0 }}
        className="min-h-screen grid place-content-center p-5"
      >
        <div className="max-w-[900px] space-y-14 ">
          <Link href="/">
            <a className="flex items-center w-fit space-x-1 top-3 left-3 fixed transition-colors hover:text-sky-400 cursor-pointer">
              <AiOutlineArrowLeft size={18} /> <p>{langs[lang]['back']}</p>
            </a>
          </Link>

          <ProjectsSection />

          <span className="w-full flex justify-center">
            <Link href="/contact">
              <a
                onClick={() => dispatch(toggleTransition(false))}
                className="text-pink-400 flex items-center gap-1 mt-3"
              >
                <p>{langs[lang]['contact_me']}</p>
                <AiOutlineArrowRight size={25} />
              </a>
            </Link>
          </span>
        </div>
      </motion.div>
    </main>
  )
}

export default Projects
