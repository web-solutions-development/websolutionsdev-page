import { Animation } from '../components/landing/animation'
import { Contact } from '../components/landing/contact'
import { Home } from '../components/landing/home'
import { Us } from '../components/landing/us'
import { LandingNavbar } from '../components/utils/landing-navbar'
import { News } from '../components/landing/container/news'
import { Services } from '../components/landing/container/services'

export const LandingPage = () => {
  return (
    <>
      <LandingNavbar />

      {/* <LandingAnimation /> Contendrá las animaciones de los laterales, será ajeno a cualquier componente, este viajará a través de todos los componentes. */}
      <div className='container font'>
        <Home />
        <Services />
        <Us />
        <News />
        <Contact />
      </div>
    </>
  )
}
