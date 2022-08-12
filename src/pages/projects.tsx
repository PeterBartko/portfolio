import { NextPage } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Props {}

const Projects: NextPage<Props> = () => {
  return (
    <main className="overflow-hidden">
      <motion.div
        initial={{ y: 300, x: -300, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        exit={{ y: -300, x: 300, opacity: 0 }}
        className="min-h-screen bg-lime-700"
      >
        <h1>Projects</h1>
        <Link href="/">
          <a href="#">back</a>
        </Link>
      </motion.div>
    </main>
  )
}

export default Projects
