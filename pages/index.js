import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'

export default function Index () {
  return (
    <>
      <Layout>
        <div className='mt-10 md:mt-20'>
          <h1 className='text-3xl md:text-6xl font-display text-red tracking-tight my-6'>Dear Internet,</h1>
          <p className='text-xl md:text-2xl md:px-10 pb-8 md:pt-8'>
            Hello, my name is Vanessa Yuen, or in Chinese: 袁逸希. I am a Barcelona based Senior Product Engineer, currently crafting human-centric products at <a href='https://www.github.com' className='text-red hover:underline'>GitHub</a>. <span className='hidden'>Outside of photosynthesis hours, I work on connecting plant lovers at <a href='https://planteka.co' className='text-red hover:underline'>Planteka</a>.</span> Drawing inspirations from other disciplines such as Economics and Urban Planning, I care deeply about user experience and community building.
          </p>
          <p className='text-xl md:text-2xl md:px-10 pb-2'>🇭🇰🇨🇦🇩🇪🇪🇸</p>
          <p className='text-xl md:text-2xl md:px-10 pb-4'>
            A reluctant nomad and permanent immigrant, I grew up in Hong Kong, matured in Toronto, flirted with Berlin, before settling in sunny Barcelona. At the moment, I share my life with my partner, a <a href='https://twitter.com/vanessayuenn/status/1309115590628474882' className='text-red hover:underline'>cat</a> that wears a toupée, and a growing collection of <a href='https://airtable.com/tbljCzdtP428DRX3S/viwUMqbZGJV5zVdWO?blocks=hide' className='text-red hover:underline'>houseplants</a>.
          </p>
          <p className='text-2xl md:text-4xl font-display text-red tracking-tight mt-6 md:mt-12'>Love,<br />Vanessa</p>
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
