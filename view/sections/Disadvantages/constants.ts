import dollar from '../../../public/dollar.svg'
import chemical from '../../../public/chemical.svg'
import book from '../../../public/book.svg'
import boot from '../../../public/boot.svg'
import dollarLess from '../../../public/dollar-less.svg'

interface Benefit {
  img: HTMLImageElement,
  title: string,
  alt: string
}

export const benefits: Benefit[] = [
  {
    img: dollar,
    title: 'Высокая стоимость сеялок прямого посева',
    alt: 'dollar'
  },
  {
    img: chemical,
    title: 'Увеличивается количество применяемых гербицидов на начальном этапе',
    alt: 'chemical'
  },
  {
    img: book,
    title: 'Необходимо приобретение новых навыков работы на земле',
    alt: 'book'
  },
  {
    img: boot,
    title: 'Ограничения на слабодренированных, переувлажненных почвах',
    alt: 'boot'
  },
  {
    img: dollarLess,
    title: 'Риск снижения урожайности при переходе с традиционной на нулевую технологию',
    alt: 'dollarLess'
  },
]