import Link from 'next/link'
import Image from 'next/image'
import { MainNav } from '../../elements/MainNav/MainNav'
import logo from '../../../public/logo.svg'
import { MobNav } from '../../elements/MobNav/MobNav'
import { MuiSelect } from '../../elements/MuiSelect'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import en from '../../../localesC/en.js'
import ru from '../../../localesC/ru.js'

export const Header = () => {
  const router = useRouter()
  const { locale } = useRouter()
  const [language, setLanguage1] = useState(locale)
  const t = locale === 'en' ? en : ru
  useEffect(() => {
    const date = new Date()
    const expireMs = 100 * 24 * 60 * 60 * 1000 // 100 days
    date.setTime(date.getTime() + expireMs)
    document.cookie = `NEXT_LOCALE=${language};expires=${date.toUTCString()};path=/`
    // setLanguage(language)
    console.log(document.cookie)
    router.push(router.asPath, router.asPath, { locale: language })
  }, [language])

  return <div className='bg-main text-secondT'>
    <div className='container py-3 flex justify-between items-center'>
      <Link href={'/'}>
        <div className='relative w-11 h-11 cursor-pointer'>
          <Image src={logo} layout='fill' alt='logo spica' />
        </div>
      </Link>
      <div className='hidden md:flex'>
        <MainNav />
      </div>
      <MuiSelect
        options={[
          {
            value: 'ru',
            text: 'RU'
          },
          {
            value: 'en',
            text: 'EN'
          }
        ]}
        placeholder=''
        value={language}
        onSelect={setLanguage1}
      />
      <div className='md:hidden'>
        <MobNav />
      </div>
      <p>{t.test}</p>
    </div>
  </div>
}