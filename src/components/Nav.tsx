interface Props {}

const Nav: React.FC<Props> = () => {
  return (
    <div className="fixed p-3 top-0 right-0 flex items-center space-x-2">
      {/* <button onClick={handleDarkMode}>
            {dark ? (
              <BsMoon size={20} className="hover:text-blue-800 transition-colors" />
            ) : (
              <BsSun size={20} className="hover:text-yellow-300 transition-colors" />
            )}
          </button>
          <button onClick={handleLanguage}>
            {lang === 'sk' ? (
              <CircleFlag countryCode="gb" height={20} width={20} />
            ) : (
              <CircleFlag countryCode="sk" height={20} width={20} />
            )}
          </button>
          <a href="https://github.com/PeterBartko" target="_blank">
            <FaGithub size={20} className="hover:text-blue-500 transition-colors" />
          </a> */}
    </div>
  )
}

export default Nav
