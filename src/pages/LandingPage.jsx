import { Contact } from '../components/landing/contact'
import { Home } from '../components/landing/home'
import { Us } from '../components/landing/us'
import { LandingNavbar } from '../components/utils/landing-navbar'
import { News } from '../components/landing/container/news'
import { Services } from '../components/landing/container/services'
import { Animation } from '../components/landing/animation/animation'

export const LandingPage = () => {
  return (
    <>
      <LandingNavbar />
      {/* Contendrá las animaciones de los laterales, será ajeno a cualquier componente, este viajará a través de todos los componentes. */}
      <Animation />
      <Home />
      <Services />
      <Us />
      <News />
      <Contact />
    </>
  )
}
