import Footer from '../components/footer'
import Meta from '../components/meta'
import Head from 'next/head'
import Header from './header'
import Container from './container'

export default function Layout ({ preview, titlePrefix, ogImage, children }) {
  return (
    <>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Lora&family=Major+Mono+Display&family=Playfair+Display&display=swap');
        </style>
        <title>{titlePrefix ? `${titlePrefix} | ` : ''}Vanessa Yuen</title>
      </Head>
      <Meta ogImage={ogImage} />
      <div className='min-h-screen'>
        <Container>
          <Header />
          <main className='md:px-20'>{children}</main>
        </Container>
        <Footer />
      </div>
    </>
  )
}
