import useMobile from '../utils/hooks/useMobile'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import ProjectsSection from './ProjectsSection'

interface Props {}

const Mobile: React.FC<Props> = () => {
  const mobile = useMobile()

  return (
    <>
      {mobile && (
        <section className="px-4 pb-8 space-y-[5rem]">
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </section>
      )}
    </>
  )
}

export default Mobile
