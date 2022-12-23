import './styles/home-style.css'
import imageComputer from '../../assets/images/landing_home_initial_computer.png'
import iconWhatsapp from '../../assets/images/whatsapp_icon.png'

export const Home = () => {
  return (
    <div className='home-bg'>
      <div className='container-screen h-full'>
        <div className='flex justify-start items-center h-full'>
          <div className='home-wsd-layout min-[1800px]:w-[800px] w-[900px] '>
            <div className='home-title-layout'>
              <span className='home-title-font'>IMPULSA TU</span>
              <span className='home-title-font'>NEGOCIO</span>
            </div>
            <div className='home-subtitle-layout'>
              <span className='home-subtitle-font'>Solicitando tu propia</span>
              <span className='home-subtitle-font'>Página web</span>
            </div>
            <div className='home-quotation-layout'>
              <button className='home-quotation-button'>Cotización</button>
            </div>
            <div className='home-contact-layout'>
              <button className='home-contact-button'>Contáctanos</button>
            </div>
          </div>
          <div className='xl:w-full lg:w-[850px] lg:block hidden'>
            <img src={imageComputer} className='w-full' />
          </div>
        </div>
      </div>
      <div className='home-icon-wss'>
        <img src={iconWhatsapp} />
      </div>
    </div>
  )
}
