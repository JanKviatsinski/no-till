import Link from 'next/link'
import { routes } from '../../../routes'

export const MainNav = () => {
  return <nav className='items-center text-xs'>
    <Link href={`/${routes.articles}`}><a className='mr-4'>Статьи</a></Link>
    <Link href={`/${routes.news}`}><a className='mr-4'>Новости</a></Link>
    <Link href={`/${routes.experts}`}><a className='mr-4'>Эксперты</a></Link>
    <Link href={`/${routes.contacts}`}><a className=''>Контакты</a></Link>
  </nav>
}
