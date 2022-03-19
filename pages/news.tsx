import { Footer } from '../view/components/Footer/Footer'
import { Header } from '../view/components/Header/Header'
import { PageHead } from '../view/elements/PageHead/PageHead'

function News () {
  return <>
    <PageHead title='news' />
    <Header />
    <div className='h-screen'>News</div>
    <Footer />
  </>
}

export default News