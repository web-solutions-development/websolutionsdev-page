import Photo from '../../assets/images/us-img.jpg'

export const Us = () => {
  return (
    <section id='us'>
    <div className='h-screen bg-gradient-to-t to-[#26252A] from-[#0D0D0D]'>
      <div
        className='h-full container-screen
       flex flex-col justify-center items-center text-center'
      >
        <h1 className='min-[1800px]:text-7xl sm:text-5xl text-3xl w-full lg:text-right px-4 2xl:block xl:hidden block text-white font-jost font-medium uppercase '>
          Quienes somos
        </h1>
        <div className='flex lg:flex-row flex-col-reverse justify-center items-center'>
          <img
            src={Photo}
            alt=''
            className='min-[1800px]:w-[800px] 2xl:w-[600px] xl:w-[540px] lg:w-[500px] w-[400px] md:p-10'
          />
          <div className='p-4 text-white font-jost lg:text-end'>
            <h1 className='text-5xl font-medium uppercase hidden xl:block 2xl:hidden'>
              Quienes somos
            </h1>
            <p className='min-[1800px]:text-5xl min-[1800px]:pl-10 sm:mt-16 2xl:mt-0 font-normal xl:text-3xl text-xl sm:text-2xl xl:pl-0  lg:pl-10'>
              Somos una empresa enfocada en crear, desarrollar y mantener sitios
              web para grandes organizaciones y/o pequeñas empresas.
            </p>
            <p className=' min-[1800px]:text-5xl min-[1800px]:pl-10 mt-12 font-normal xl:text-3xl text-xl sm:text-2xl xl:pl-0  lg:pl-10 '>
              Trabajamos con la opinión de los clientes sobre sus proyectos, ya
              que es clave para lograr juntos una pieza verdaderamente útil que
              cumpla con sus espectativas.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
