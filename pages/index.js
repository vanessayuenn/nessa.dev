import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'

export default function Index () {
  return (
    <>
      <Layout>
        <div className='mt-10 md:mt-20'>
          <h1 className='text-3xl md:text-6xl font-display text-red tracking-tight my-6'>Dear Internet,</h1>
          <p className='text-xl md:text-2xl md:px-10 pb-8 md:pt-8'>
            Hello, my name is Vanessa Yuen, or in Chinese: 袁逸希. I am a product-oriented engineering leader and people manager, currently building cool stuff at <a href='https://www.github.com' className='text-red hover:underline'>GitHub</a>. Drawing inspirations from other disciplines such as Economics and Urban Planning, I care deeply about user experience and community building.
          </p>
          <h2 className='text-xl md:text-2xl md:px-10 pb-2 text-center'>🇭🇰 &#8594; 🇨🇦 &#8594; 🇩🇪 &#8594; 🇪🇸</h2>
          <p className='text-xl md:text-2xl md:px-10 pb-4'>
            A reluctant nomad and permanent immigrant, I grew up in Hong Kong, matured in Toronto, flirted with Berlin, before settling in sunny Barcelona. At the moment, I share my life with my partner, <a href='https://twitter.com/vanessayuenn/status/1359188174837346309' className='text-red hover:underline'>two cats</a>  who are permanent blockers but endless entertainment, and a growing collection of <a href='https://airtable.com/tbljCzdtP428DRX3S/viwUMqbZGJV5zVdWO?blocks=hide' className='text-red hover:underline'>houseplants</a>.
          </p>
          <p className='text-2xl md:text-4xl font-display text-red tracking-tight mt-6 md:mt-12 mb-24 md:mb-40'>Love,<br />Vanessa</p>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps () {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ])

  return {
    props: { allPosts }
  }
}
