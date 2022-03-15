import disadvantages from '../../../public/disadvantages.svg'
import Image from 'next/image'
import { CommonContainer } from '../../components/CommonContainer/CommonContainer'
import { opinions } from './constants'

export const Opinions = () => {
  return <section className='bg-second'>
    <CommonContainer classes='text-mainT flex-col'>
      <h2 className='h2 mb-4 text-center'>
        Мнения
      </h2>
      <ul className='grid gap-11 grid-cols-1 md:grid-cols-2'>
        {opinions.map(opinion =>
          <li className='' key={opinion.name}>
            <div className='flex mb-3'>
              <div className='w-12 h-12 relative mr-2 rounded-md overflow-hidden'>
                <Image src={opinion.img} layout='fill' alt={opinion.alt} />
              </div>
              <h3 className='h3'>{opinion.name}</h3>
            </div>
            <p>{opinion.text}</p>
          </li>)}
      </ul>
    </CommonContainer>
  </section>
}