import Head from 'next/head'

export default function Meta ({ ogImage }) {
  return (
    <Head>
      <link rel='icon' href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍜</text></svg>' />
      <meta
        name='description'
        content='Vanessa Yuen | Senior Product Engineer'
      />
      {/* <meta property="og:image" content={ogImage || HOME_OG_IMAGE_URL} /> */}
    </Head>
  )
}
