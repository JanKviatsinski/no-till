import Link from 'next/link'
import Image from 'next/image'
import { ButtonBoorger } from '../../buttons/ButtonBoorger/ButtonBoorger'
import { ButtonOutliner } from '../../buttons/ButtonOutliner/ButtonOutliner'
import { MainNav } from '../../elements/MainNav/MainNav'
import logo from '../../../public/logo.svg'

export const Header = () =>
  <div className='bg-main text-secondT'>
    <div className='container py-3 flex justify-between items-center'>
      <Link href={'/'}>
        <div className='relative w-11 h-11 cursor-pointer'>
          <Image src={logo} layout='fill' alt='logo spica' />
        </div>
      </Link>
      <MainNav />
      {/* <div className='hidden md:block'>
        <Link href={'/'}><a className='mr-4 text-xs'>Sign In</a></Link>
        <ButtonOutliner text='Get Started' />
      </div> */}
      <div className='md:hidden'>
        <ButtonBoorger />
      </div>
    </div>
  </div>