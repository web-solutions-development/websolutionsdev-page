import { NavLink } from 'react-router-dom'
import LogoWhite from '../../assets/images/logo_blanco.png'
import { HiMenu } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'
import { useState } from 'react'

export const LandingNavbar = () => {
  const [menu, isMenu] = useState(false)

  return (
    <nav
      className='bg-primary fixed z-[200] w-full
    '
    >
      <div className='flex container-screen justify-between'>
        <div className='flex items-center'>
        <img src={LogoWhite} alt='logo' className='md:w-18 w-12 mb-3 pt-3' />
          <p className='text-white font-jost lg:text-2x0 md:text-[20px] text-[8px]  font-medium'>
            Web Solutions Development
          </p>
        </div>
        <ul className='flex items-center gap-4'>
          <li className='hidden 2xl:block'>
            <a
              href='#home'
              className='text-primary-option font-jost text-xl font-light'
            >
              Inicio
            </a>
          </li>
          <li className='hidden 2xl:block'>
            <a href='#service' className='text-white font-jost text-xl font-light'>
              Servicioos
            </a>
          </li>
          <li className='hidden 2xl:block'>
            <a href='#new' className='text-white font-jost text-xl font-light'>
              Noticias
            </a>
          </li>
          <li className='hidden 2xl:block'>
            <a href='#us' className='text-white font-jost text-xl font-light'>
              Quiénes somos
            </a>
          </li>
          <li className='hidden 2xl:block'>
            <a href='#contact' className='text-white font-jost text-xl font-light'>
              Contactanos
            </a>
          </li>
          <li className='min-[1920px]:ml-12 md:block hidden'>
            <div className='p-1 px-6 font-bold rounded-lg bg-primary-option text-xl'>
            <a href='#contact'>
              Cotización
            </a>
            </div>
          </li>
          <li className='block 2xl:hidden ' onClick={() => isMenu(!menu)}>
            <HiMenu size={40} className='text-white' />
          </li>
        </ul>
      </div>
      <div
        className={
          menu
            ? 'fixed left-0 top-0 w-full h-full justify-center text-center border-r border-r-gray-900 bg-primary ease-in-out duration-500'
            : 'fixed left-[-100%]  '
        }
      >
        <div className='justify-end text-3xl font-bold text-white m-4'>
          <CgClose
            className='text-end float-right'
            onClick={() => isMenu(!menu)}
            size={30}
          />
        </div>
        <ul className='uppercase p-4 lg:max-w-xl max-w-lg mx-auto text-white font-jost text-xl font-light '>
          <li className='p-4 border-b'>Inicio</li>
          <li className='p-4 border-b'>Servicios</li>
          <li className='p-4 border-b'>Noticias</li>
          <li className='p-4 border-b'>Quiénes somos</li>
          <li className='p-4 border-b md:border-b-0'>Contactanos</li>
          <li className='p-4 md:hidden block'>Cotización</li>
        </ul>
      </div>
    </nav>
  )
}
