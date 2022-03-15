import Link from 'next/link';

export const MainNav = () =>
  <nav className='mr-4 items-center text-xs hidden md:flex'>
    <Link href={'/'}><a className='mr-4'>Статьи</a></Link>
    <Link href={'/'}><a className='mr-4'>Новости</a></Link>
    <Link href={'/'}><a className='mr-4'>Эксперты</a></Link>
    <Link href={'/'}><a className=''>Контакты</a></Link>
  </nav>
