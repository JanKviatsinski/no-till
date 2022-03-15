import disadvantages from '../../../public/disadvantages.svg'
import Image from 'next/image'
import { CommonContainer } from '../../components/CommonContainer/CommonContainer'
import { benefits } from './constants'

export const Disadvantages = () => {
  return <section className='bg-second'>
    <CommonContainer classes='text-mainT flex-col'>
      <h2 className='h2 mb-4 text-center'>
        5 недостатков
      </h2>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
        <div className='w-full min-h-[16rem] relative md:order-last'>
          <Image src={disadvantages} layout='fill' alt='tractor in the mud' />
        </div>
        <ul className='text-center md:text-left'>
          {benefits.map(benefit =>
            <li className='mb-3 grid gap-2 grid-cols-1 justify-items-center md:justify-items-start md:grid-cols-[auto_1fr] last:m-0' key={benefit.title}>
              <div className='w-5 h-5 relative mr-2'>
                <Image src={benefit.img} layout='fill' alt={benefit.alt} />
              </div>
              <p>{benefit.title}</p>
            </li>)}
        </ul>
      </div>
    </CommonContainer>
  </section>
}