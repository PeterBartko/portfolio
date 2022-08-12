import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const particlesInit = async (engine: any) => await loadFull(engine)

interface Props {
  dark: boolean
}

const ParticlesBG: React.FC<Props> = () => (
  <Particles
    id="tsparticles"
    init={particlesInit}
    options={{
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        number: {
          value: 30,
          density: {
            enable: false,
            value_area: 800,
          },
        },
        shape: {
          type: 'image',
          images: [
            { src: '/bg-icons/react.svg' },
            { src: '/bg-icons/next.svg' },
            { src: '/bg-icons/vue.svg' },
            { src: '/bg-icons/html.svg' },
            { src: '/bg-icons/js.svg' },
            { src: '/bg-icons/css.svg' },
            { src: '/bg-icons/sass.svg' },
            { src: '/bg-icons/redux.svg' },
            { src: '/bg-icons/ts.svg' },
            { src: '/bg-icons/tailwind.svg' },
          ],
          options: {},
        },
        opacity: {
          value: 0.8,
          random: false,
          anim: {
            enable: true,
            speed: 0.4,
            opacity_min: 0.5,
            sync: false,
          },
        },
        size: {
          value: 16,
          random: true,
          anim: {
            enable: true,
            speed: 6,
            size_min: 5,
            sync: false,
          },
        },
        rotate: {
          value: 0,
          random: true,
          direction: 'clockwise',
          animation: {
            enable: true,
            speed: 5,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 600,
          color: '#ffffff',
          opacity: 0.4,
          width: 2,
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'bounce',
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'bubble',
          },
          onclick: {
            enable: true,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 200,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
      background: {
        position: '50% 50%',
        size: 'cover',
        opacity: 0,
      },
    }}
  />
)

export default ParticlesBG
