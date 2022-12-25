import './styles/home-style.css'
import imageComputer from '../../assets/images/landing_home_initial_computer.png'
import iconWhatsapp from '../../assets/images/whatsapp_icon.png'
import { Typewriter } from 'react-simple-typewriter'

export const Home = () => {

  return <div className="home-bg">
    <div className="container-screen h-full">
      <div className='home-layout'>
        <div className='home-wsd-layout'>
          <div className='home-title-layout'>
            <span className='home-title-font'>
              IMPULSA TU
            </span>
            <span className='home-title-font'>
              NEGOCIO
            </span>
          </div>
          <div className='home-subtitle-layout'>
            <span className='home-subtitle-font'>
              Solicitando tu propia
            </span>
            <span className='home-subtitle-font'>
              <Typewriter
                words={['Página Web', 'Aplicativo Web', 'E-commerce']}
                loop
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </span>
          </div>
          <div className='home-quotation-layout'>
            <button className='home-quotation-button'>
              Cotización
            </button>
          </div>
          <div className='home-contact-layout'>
            <button className='home-contact-button'>
              Contáctanos
            </button>
          </div>
        </div>
        <div className='home-image-layout'>
          <img src={imageComputer} />
        </div>
      </div>

    </div>
    <div className='home-icon-wss' >
      <a href='https://wa.link/7wpbkq' target="_blank" rel="noopener noreferrer">
        <img src={iconWhatsapp} />
      </a>
    </div>
  </div>
}
