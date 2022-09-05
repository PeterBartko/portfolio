import { useState, useEffect } from 'react'

const useScroll = () => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(window.pageYOffset)
    const handleScroll = () => setHeight(window.pageYOffset)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return height
}

export default useScroll
