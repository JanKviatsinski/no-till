import { Footer } from '../view/components/Footer/Footer'
import { Header } from '../view/components/Header/Header'
import { PageHead } from '../view/elements/PageHead/PageHead'

function Articles () {
  return <>
    <PageHead title='articles' />
    <Header />
    <div className='h-screen'>Articles</div>
    <Footer />
  </>
}

export default Articles