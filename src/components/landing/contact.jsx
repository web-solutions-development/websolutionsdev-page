import './styles/contact-style.css'
import ContactPicture from '../../assets/images/contact-picture.png'

export const Contact = () => {
  return (
    <div className='h-screen w-full py-10 bg-gradient-to-b from-[#26252A] to-[#0D0D0D]'>
      <div className='flex flex-col container-screen'>
        <h1 className='text-white text-[64px] font-jost font-bold text-center sm:mt-0 mt-10 md:w-full self-center w-[450px]'>
          Solicita una Cotización
        </h1>
        <div className='flex mt-10 2xl:mx-0 mx-10 justify-center'>
          <div className='grid gap-4 bg-secondary-black p-10 place-items-start rounded-[45px] contact-form'>
            <h2 className='text-2xl text-white font-inter'>
              Déjanos tus datos !
            </h2>
            <input
              className='contact-input'
              type='text'
              placeholder='Nombre completo'
            />
            <input
              className='contact-input'
              type='text'
              placeholder='Teléfono'
            />
            <input
              className='contact-input'
              type='text'
              placeholder='Correo electrónico'
            />
            <div className='grid'>
              <label className='text-white text-sm font-jost'>
                Interesado en
              </label>
              <div className='contact-select'>
                <select className=''>
                  <option>-- Seleccione --</option>
                </select>
                <i></i>
              </div>
            </div>
            <textarea
              className='contact-input max-h-[128px] resize-none'
              placeholder='Mensaje/Requerimiento'
            />
            <button className='p-2 px-12 text-xl font-palanquin-dark bg-primary text-white rounded-lg'>
              Enviar
            </button>
          </div>
          <div className='self-center contact-picture-shadow p-10 lg:block hidden'>
            <img src={ContactPicture} className='xl:w-[450px] w-[300px]' />
          </div>
        </div>
      </div>
    </div>
  )
}
