import { IoCopyOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import langs from '../utils/langs'

interface Props {}

const ContactSection: React.FC<Props> = () => {
  const { lang } = useSelector((state: RootState) => state.nav)

  return (
    <div className="max-w-[800px] space-y-4 [&>p]:backdrop-blur-sm [&>p]:text-lg">
      <h1 id="contact" className="grad-text text-4xl">
        {langs[lang]['contact']}
      </h1>
      <p className="text-xl w-fit">{langs[lang]['thanks']}</p>
      <div className="text-xl w-fit">
        {langs[lang]['mail']}{' '}
        <div className="flex items-center">
          <a className="grad-text" href="mailto:peterbartko132@gmail.com">
            peterbartko132@gmail.com
          </a>
          .
          <button
            className="ml-2 hover:text-pink-400 transition-colors"
            onClick={() => {
              navigator.clipboard.writeText('peterbartko132@gmail.com')
            }}
          >
            <IoCopyOutline size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
