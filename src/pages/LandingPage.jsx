import React from 'react'
import { LandingAnimation } from '../components/landing/landing-animation'
import { LandingContact } from '../components/landing/landing-contact'
import { LandingHome } from '../components/landing/landing-home'
import { LandingNews } from '../components/landing/landing-news'
import { LandingServices } from '../components/landing/landing-services'
import { LandingUs } from '../components/landing/landing-us'
import { LandingNavbar } from '../components/utils/landing-navbar'

export const LandingPage = () => {
  return (
    <>
      <LandingNavbar />

      {/* <LandingAnimation /> Contendrá las animaciones de los laterales, será ajeno a cualquier componente, este viajará a través de todos los componentes. */}
      <div className='container'>
        <LandingHome />
        <LandingServices />
        <LandingUs />
        <LandingNews />
        <LandingContact />
      </div>
    </>
  )
}
