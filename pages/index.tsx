import Head from 'next/head'
import { Header } from '../view/components/Header/Header'
import { Benefits } from '../view/sections/Benefits/Benefits'
import { Description } from '../view/sections/Description/Description'

export default function Home () {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700;900&display=swap" rel="stylesheet" />
        <title>Апалон Каликстович Великий</title>
        {/* пишем не более 140 символов. */}
        <meta name="description" content="Апалон Каликстович Великий - как стать великим человеком" />
        {/* ѕишем не более 20ти слов.  лючевые фразы раздел€ем зап€той. */}
        <meta name="keywords" content="Апалон Каликстович Великий, как стать великим человеком, Апалон, Каликстович, Великий" />

        <meta name="Author" content="Апалон Каликстович Великий" />
        <meta name="Address" content="yan5751839@gmail.com" />

        {/* <!-- локализаци€ сайта, дл€ русско€зычного сайта ru_RU --> */}
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Апалон Каликстович Великий" />
        <meta property="og:description" content="Апалон Каликстович Великий, как стать великим человеком, Апалон, Каликстович, Великий" />
        <meta property="og:image"
          content="https://my-next-js-ten.vercel.app/graphic33.jpg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://my-next-js-ten.vercel.app/ " />
        <meta property="og:site_name" content="Апалон Каликстович Великий" />

        {/* <link rel="icon" sizes="192x192" href="https://my-next-js-ten.vercel.app/graphic33.jpg" />
        <link rel="shortcut icon" href="https://my-next-js-ten.vercel.app/graphic33.jpg" type="image/png" />
        <link rel="apple-touch-icon" href="https://my-next-js-ten.vercel.app/graphic33.jpg" type="image/png" /> */}
      </Head>
      <Header />
      <Description />
      <Benefits />
    </>
  )
}
