import { Footer } from '../view/components/Footer/Footer'
import { Header } from '../view/components/Header/Header'
import { PageHead } from '../view/elements/PageHead/PageHead'

function Contacts () {
  return <>
    <PageHead title='contacts' />
    <Header />
    <div className='h-screen'>contacts</div>
    <Footer />
  </>
}

export default Contacts