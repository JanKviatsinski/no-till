import arm from '../../../public/arm.svg'
import drop from '../../../public/drop.svg'
import flower from '../../../public/flower.svg'
import fuel from '../../../public/fuel.svg'
import tractor from '../../../public/tractor.svg'

interface Benefit {
  img: HTMLImageElement,
  title: string,
  alt: string
}

export const benefits: Benefit[] = [
  {
    img: arm,
    title: 'Требуется меньше рабочей силы',
    alt: 'arm'
  },
  {
    img: drop,
    title: 'Сохраняется и накапливается почвенная влага',
    alt: 'drop'
  },
  {
    img: flower,
    title: 'Сохраняется и восстановливается плодородный слой почвы',
    alt: 'flower'
  },
  {
    img: fuel,
    title: 'Используется меньшее количество топлива',
    alt: 'fuel'
  },
  {
    img: tractor,
    title: 'Сокращение расходов на амортизацию техники',
    alt: 'tractor'
  },
]