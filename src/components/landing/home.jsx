import './styles/home-style.css'
import imageComputer from '../../assets/images/landing_home_initial_computer.png'

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
          <div className='my-3'>
            <span className='home-subtitle-font'>
              Solicitando tu
            </span>
            <br />
            <span className='home-subtitle-font'>
              Página web
            </span>
          </div>
        </div>
        <div className='home-image-layout'>
          <img src={imageComputer} />
        </div>
      </div>

    </div>
  </div>
}
