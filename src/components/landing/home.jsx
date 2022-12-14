import './styles/home-style.css'
import imageComputer from '../../assets/images/landing_home_initial_computer.png'
import iconWhatsapp from '../../assets/images/whatsapp_icon.png'

export const Home = () => {

  return <div className="home-bg">
    <div className="container-screen h-full">
      <div className='home-layout'>
        <div className='home-title-layout'>
          <span className='home-title-font'>
            IMPULSA TU
          </span>
          <br />
          <span className='home-title-font'>
            NEGOCIO
          </span>
          <div className='mt-10'>
            <span className='home-subtitle-font'>
              Solicitando tu propia
            </span>
            <br />
            <span className='home-subtitle-font'>
              Página web
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
    <div className='home-icon-wss'>
      <img src={iconWhatsapp} />
    </div>
  </div>
}
