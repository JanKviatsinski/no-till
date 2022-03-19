import Head from 'next/head'
import { Footer } from '../view/components/Footer/Footer'
import { Header } from '../view/components/Header/Header'
import { PageHead } from '../view/elements/PageHead/PageHead'
import { Benefits } from '../view/sections/Benefits/Benefits'
import { Description } from '../view/sections/Description/Description'
import { Disadvantages } from '../view/sections/Disadvantages/Disadvantages'
import { Opinions } from '../view/sections/Opinions/Opinions'

export default function Home () {
  return <>
    <PageHead title='home' />
    <Header />
    <Description />
    <Benefits />
    <Disadvantages />
    <Opinions />
    <Footer />
  </>
}
