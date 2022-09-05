import { useEffect } from 'react'
import { CircleFlag } from 'react-circle-flags'
import { BsMoon, BsSun } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { RootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode, toggleDarkMode, toggleLanguage } from '../redux/navSlice'

const Nav: React.FC = () => {
  const { dark, lang } = useSelector((state: RootState) => state.nav)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDarkMode(localStorage.theme === 'light'))
  }, [])

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <div className="dark:text-white fixed z-50 p-3 top-0 right-0 flex items-center space-x-2">
      <button onClick={() => dispatch(toggleDarkMode())}>
        {dark ? (
          <BsMoon size={20} className="hover:text-blue-800 transition-colors" />
        ) : (
          <BsSun size={20} className="hover:text-yellow-300 transition-colors" />
        )}
      </button>
      <button onClick={() => dispatch(toggleLanguage())}>
        <CircleFlag countryCode={lang === 'sk' ? 'gb' : 'sk'} height={20} width={20} />
      </button>
      <a href="https://github.com/PeterBartko" target="_blank" rel="noopener noreferrer">
        <FaGithub size={20} className="hover:text-sky-400 transition-colors" />
      </a>
    </div>
  )
}

export default Nav
