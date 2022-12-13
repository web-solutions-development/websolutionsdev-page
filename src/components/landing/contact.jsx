import './styles/contact-style.css'

export const Contact = () => {
  return (
    <div className='h-screen w-full py-10 bg-gradient-to-b from-[#26252A] to-[#0D0D0D]'>
      <div className='flex flex-col container-screen'>
        <h1 className='text-white text-[64px] font-jost font-bold text-center'>
          Solicita una Cotización
        </h1>
        <div className='flex justify-between mt-10'>
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
              className='contact-input h-32 min-h-[128px] max-h-40'
              placeholder='Mensaje/Requerimiento'
            />
            <button className='p-2 px-12 text-xl font-palanquin-dark bg-primary text-white rounded-lg'>
              Enviar
            </button>
          </div>
          <div className='self-center'>
            <img src='' />
          </div>
        </div>
      </div>
    </div>
  )
}
