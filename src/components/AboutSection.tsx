import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import langs from '../utils/langs'

interface Props {}

const AboutSection: React.FC<Props> = () => {
  const { lang } = useSelector((state: RootState) => state.nav)

  return (
    <div className="max-w-[800px] space-y-4 [&>p]:backdrop-blur-sm [&>p]:text-lg [&>p]:w-fit">
      <h1 id="about" className="grad-text text-4xl">
        {langs[lang]['about']}
      </h1>
      <p>{langs[lang]['about_me']}</p>
      <p>{langs[lang]['about_me2']}</p>
      <h2 className="grad-text text-2xl">{langs[lang]['hobbies']}</h2>
      <ul className="flex items-center gap-6">
        <li>🎮 {langs[lang]['gaming']}</li>
        <li>📺 {langs[lang]['tv']}</li>
        <li>🎧 {langs[lang]['music']}</li>
        <li>🚶‍♂️ {langs[lang]['hiking']}</li>
        <li>🎨 {langs[lang]['painting']}</li>
      </ul>
    </div>
  )
}

export default AboutSection
