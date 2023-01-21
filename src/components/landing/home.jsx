import './styles/home-style.css'
import imageComputer from '../../assets/images/home_img.png'
import iconWhatsapp from '../../assets/images/whatsapp_icon.png'
import { Typewriter } from 'react-simple-typewriter'

export const Home = () => {
  return (
    <section id='home'>
      <div className='home-bg'>
        <div className='container-screen h-full'>
          <div className='flex justify-start items-center h-full'>
            <div className='home-wsd-layout min-[1800px]:w-[800px] w-[900px] z-50 '>
              <div className='home-title-layout'>
                <span className='home-title-font'>IMPULSA TU</span>
                <span className='home-title-font'>NEGOCIO</span>
              </div>
              <div className='home-subtitle-layout'>
                <span className='home-subtitle-font'>Solicitando tu propia</span>
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
                <button className='home-quotation-button'>Cotización</button>
              </div>
              <div className='home-contact-layout'>
                <button className='home-contact-button'>Contáctanos</button>
              </div>
            </div>
            <div className='home-image-layout xl:w-full lg:w-[850px] lg:block hidden'>
              <img src={imageComputer} className='w-full' />
            </div>
          </div>
        </div>
        <div className='home-icon-wss z-[100]'>
          <a href='https://wa.link/ckeffh' target="_blank" rel="noopener noreferrer">
            <img src={iconWhatsapp} />

          </a>
        </div>
      </div>
    </section>
  )
}

