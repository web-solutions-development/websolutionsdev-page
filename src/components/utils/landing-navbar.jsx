import { NavLink } from 'react-router-dom'
import LogoWhite from '../../assets/images/logo_blanco.png'
import { HiMenu } from 'react-icons/hi'

export const LandingNavbar = () => {
  return (
    <nav
      className='bg-primary py-2
    '
    >
      <div className='flex container-screen justify-between'>
        <div className='flex items-center'>
          <img src={LogoWhite} alt='logo' className='md:w-24 w-12' />
          <p className='text-white font-jost lg:text-3xl md:text-2xl text-[15px]  font-medium'>
            Web Solutions Development
          </p>
        </div>
        <ul className='flex items-center gap-4'>
          <li className='hidden 2xl:block'>
            <NavLink
              to=''
              className='text-primary-option font-jost text-xl font-light'
            >
              Inicio
            </NavLink>
          </li>
          <li className='hidden 2xl:block'>
            <NavLink to='' className='text-white font-jost text-xl font-light'>
              Servicios
            </NavLink>
          </li>
          <li className='hidden 2xl:block'>
            <NavLink to='' className='text-white font-jost text-xl font-light'>
              Noticias
            </NavLink>
          </li>
          <li className='hidden 2xl:block'>
            <NavLink to='' className='text-white font-jost text-xl font-light'>
              Quiénes somos
            </NavLink>
          </li>
          <li className='hidden 2xl:block'>
            <NavLink to='' className='text-white font-jost text-xl font-light'>
              Contactanos
            </NavLink>
          </li>
          <li className='min-[1920px]:ml-12 md:block hidden'>
            <div className='p-1 px-6 font-bold rounded-lg bg-primary-option text-xl'>
              Cotización
            </div>
          </li>
          <li className='block 2xl:hidden '>
            <HiMenu size={40} className='text-white' />
          </li>
        </ul>
      </div>
    </nav>
  )
}
