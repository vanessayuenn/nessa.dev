import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'

export default function Index ({ allPosts }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout prefix='Musings'>
        <h1 className='text-4xl font-display mt-10 md:mt-20'>coming 🔜</h1>
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
