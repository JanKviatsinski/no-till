import DraganchykMIhail from '../../../public/Draganchyk-MIhail.jpeg'
import MihailVoitoivik from '../../../public/Mihail-Voitoivik.png'
import MichaelHorsch from '../../../public/Michael-Horsch.jpeg'
import VictorKuharchuk from '../../../public/Victor-Kuharchuk.png'
import RuslanNeroda from '../../../public/Ruslan-Neroda.png'

interface Opinion {
  img: StaticImageData,
  name: string
  alt: string
  text: string
}

export const opinions: Opinion[] = [
  {
    img: DraganchykMIhail,
    name: 'Михаил Драганчук',
    alt: 'Draganchyk MIhail',
    text: 'Проблема многих людей, которые уже давно работают в аграрном бизнесе в том, что они думают, что будут работать в этом бизнесе и завтра. Но если они не изменят своих взглядов, на их место придут новые люди'
  },
  {
    img: MihailVoitoivik,
    name: 'Михаил Войтовик',
    alt: 'Mihail Voitoivik',
    text: 'Я думаю, как и в любом деле, на земле должны работать профессионалы, которые в первую очередь любят землю, которые о ней беспокоятся и которые умеют зарабатывать на этой земле'
  },
  {
    img: MichaelHorsch,
    name: 'Майкл Хорш',
    alt: 'Michael Horsch',
    text: '... Это значит что фермеры, которые будут отходить от традиционной обработки и переходить к минимальной и No-till , должны быть профессионалами, для того чтобы уметь эффективно применять новые технологии. Я снова вас предупреждаю - No-till это не решение того, как выжить. Каждый из вас кто рассматривает No-till как религию, тот мертв. Вы должны знать No-till это способ стать более профессиональным'
  },
  {
    img: VictorKuharchuk,
    name: 'Виктор Кахарчук',
    alt: 'Victor Kuharchuk',
    text: 'Большинство фермеров, которые считают, что они в будущем будут в этом бизнесе, скорее всего не будут в бизнесе именно в будущем. Почему? Потому что они никогда не научатся, не приспособятся. И жизнь, и бизнес фермера становятся все труднее и труднее'
  },
  {
    img: RuslanNeroda,
    name: 'Руслан Нерода',
    alt: 'Ruslan Neroda',
    text: 'Эта технология нуждается в адаптации не только определенному региону а фактически к каждому хозяйству и каждому полю… Эта технология не для дураков. ...No-till  это одна из технологий не лучшая не худшая это всего лишь иной путь'
  }
]