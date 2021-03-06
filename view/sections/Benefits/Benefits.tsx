import lessWorkForce from '../../../public/less-work-force.svg'
import Image from 'next/image'
import { CommonContainer } from '../../components/CommonContainer/CommonContainer'
import { benefits } from './constants'

export const Benefits = () => {
  return <section className='bg-third'>
    <CommonContainer classes='text-mainT flex-col'>
      <h2 className='h2 mb-4 text-center'>
        5 преимуществ
      </h2>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
        <div className='w-full min-h-[16rem] relative'>
          <Image src={lessWorkForce} layout='fill' alt='icon less work force' />
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