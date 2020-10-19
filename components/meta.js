import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta({ ogImage }) {
  return (
    <Head>
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍜</text></svg>"></link>
      <meta
        name="description"
        content="Vanessa Yuen"
      />
      {/* <meta property="og:image" content={ogImage || HOME_OG_IMAGE_URL} /> */}
    </Head>
  )
}
