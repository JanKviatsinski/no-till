import mulch from '../../../public/mulch.svg'
import noTill from '../../../public/no-till.svg'
import Image from 'next/image'
import { CommonContainer } from '../../components/CommonContainer/CommonContainer'
import { ButtonNormal } from '../../buttons/ButtonNormal/ButtonNormal'

export const Benefits = () => {
  // <Image src={star} alt='icon simple graphic' />
  return <section className='bg-second'>
    <CommonContainer classes='text-mainT flex-col'>
      <h1 className='text-3xl mb-6 text-center font-medium'>
        No-till технология
      </h1>
      <div className=''>
        {/* <div className='border-r-2 border-third'> */}
        <h2 className='text-2xl text-center mb-3'>Главные принципы</h2>
        <div className='grid gap-5 grid-cols-1 text-center md:grid-cols-2'>
          <div className='flex flex-col items-center'>
            <div className='relative w-24 h-24 '>
              <Image src={noTill} layout='fill' alt='icon prohibition of tillage' />
            </div>
            <h3 className='text-2xl mb-3'>
              Не пахать
            </h3>
            <p>
              Исключаете не только пахоту, но и другие виды механической обработки. Посев производится по сохраненным на поверхности пожнивным остаткам предыдущей культуры в необработанную почву.
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 relative'>
              <Image src={mulch} layout='fill' alt='icon mulch' />
            </div>
            <h3 className='text-2xl mb-3'>
              Укройте почву
            </h3>
            <p>
              Растительные остатки остаюся на поверхности почвы. И чем их больше – тем лучше. Ведь именно они позволяют сохранить влагу в почве и защитить ее от эрозии.
            </p>
          </div>
        </div>
      </div>
    </CommonContainer>
  </section>
}