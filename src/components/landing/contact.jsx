import './styles/contact-style.css'
import ContactPicture from '../../assets/images/contact-picture.png'

export const Contact = () => {
  return (
    <div className='h-screen w-full py-10 bg-gradient-to-b from-[#26252A] to-[#0D0D0D]'>
      <div className='flex flex-col h-full justify-center container-screen'>
        <h1 className='text-white md:text-[60px] text-[40px] font-jost font-bold text-center sm:mt-0 mt-10 md:w-full self-center sm:w-[550px]'>
          Solicita una Cotización
        </h1>
        <div className='flex sm:mt-10 mt-5 2xl:mx-0 mx-10 justify-center'>
          <form action="https://formsubmit.co/contact@websolutionsdev.com" method="POST"
            className='grid gap-4 bg-secondary-black p-10 place-items-start rounded-[45px] contact-form z-50'>
            <h2 className='text-2xl text-white font-inter'>
              Déjanos tus datos !
            </h2>
            <input
              className='contact-input'
              name='Nombre del Cliente'
              type='text'
              placeholder='Nombre completo'
              required
            />
            <input
              className='contact-input'
              name='Telefono del Cliente'
              type='number'
              placeholder='Teléfono'
              required
            />
            <input
              className='form-control contact-input'
              type='email'
              name='email'
              placeholder='Correo electrónico'
              required
            />
            <div className='grid'>
              <label className='text-white text-sm font-jost'>
                Interesado en
              </label>
              <div className='contact-select'>
                <select className='' name='Interes del Cliente'>
                  <option>-- Seleccione --</option>
                  <option>-- Mantenimiento de Paginas Web --</option>
                  <option>-- Creacion y Desarrollo de Paginas Web --</option>
                  <option>-- Creacion y Desarrollo de E-Commerce --</option>
                </select>
                <i></i>
              </div>
            </div>
            <textarea
              className='contact-input max-h-[128px] resize-none'
              name='Requerimiento del Servicio'
              placeholder='Mensaje/Requerimiento'
            />
            <button
              type='submit'
              className='p-2 px-12 text-xl font-palanquin-dark bg-primary text-white rounded-lg'>
              Enviar
            </button>
          </form>
          <div className='self-center contact-picture-shadow p-10 lg:block hidden'>
            <img src={ContactPicture} className='xl:w-[450px] w-[300px]' />
          </div>
        </div>
      </div>
    </div>
  )
}
