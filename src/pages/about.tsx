import { NextPage } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si'
import { FaSass } from 'react-icons/fa'

interface Props {}

const About: NextPage<Props> = () => {
  return (
    <div className="overflow-hidden bg-black text-white">
      <motion.div
        initial={{ y: 300, x: 300, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        exit={{ y: -300, x: -300, opacity: 0 }}
        className="overflow-hidden flex flex-wrap space-x-2"
      >
        <h1></h1>
        about
        <Link href="/">
          <a href="#">back</a>
        </Link>
      </motion.div>
    </div>
  )
}

export default About
