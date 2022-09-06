import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import langs from '../utils/langs'

const projects = [
  {
    name: 'reminder',
    stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'SCSS', 'PWA'],
    demo: 'https://reminder-xi.vercel.app/',
    github: 'reminder',
  },
  {
    name: 'flags',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS'],
    demo: 'https://fem-flags.vercel.app/',
    github: 'fem-flags',
  },
  {
    name: 'pokemon',
    stack: ['React', 'Vite', 'TailwindCSS'],
    demo: 'https://pokemon-quiz-lac.vercel.app/',
    github: 'Pokemon-Quiz',
  },
]

interface Props {}

const ProjectsSection: React.FC<Props> = () => {
  const { lang } = useSelector((state: RootState) => state.nav)

  return (
    <>
      <h1 id="projects" className="grad-text text-4xl ">
        {langs[lang]['projects']}
      </h1>

      <section className="flex flex-wrap justify-center gap-[4rem] sm:gap-5 !mt-8">
        {projects?.map(({ name, demo, stack, github }) => (
          <div key={name} className="w-[380px] space-y-2 rounded-md">
            <div className="w-full h-[260px] relative">
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <Image
                  src={`/thumbnails/${name}.png`}
                  width="380"
                  height="260"
                  alt="thumbnail"
                  className="rounded-md"
                />
              </a>
            </div>

            <h3 className="text-2xl text-center font-bold dark:text-pink-300 text-pink-400 w-full">
              {langs[lang][name]}
            </h3>
            <span className="flex items-center flex-wrap gap-1">
              {stack?.map(s => (
                <p
                  key={s}
                  className="dark:text-purple-300 text-purple-500 p-1 shadow rounded dark:bg-zinc-800 bg-zinc-50"
                >
                  {s}
                </p>
              ))}
            </span>
            <p className="text-zinc-400">{langs[lang][name + '_desc']}</p>
            <a
              href={`https://github.com/PeterBartko/${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-base text-white [&>*]:hover:text-sky-400 gap-1"
            >
              <FaGithub size={15} />
              <code className="text-white">GitHub</code>
            </a>
          </div>
        ))}

        <p className="w-full text-xl text-center">{langs[lang]['more']}</p>
      </section>
    </>
  )
}

export default ProjectsSection
