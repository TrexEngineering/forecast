import Head from 'next/head'

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>タロット占い</title>
        <meta name="description" content="タロット占い作ってみた"/>
        <meta property="og:type" content="website" />
        <meta property='og:image' content="/tarot.png" />
        <meta property='og:title' content="株式会社トレックス | タロット占い" />
        <meta property='og:description' content="タロット占い作ってみた" />
        <meta property='og:url' content="https://www.trex-group.com/"/>
        <meta name='twitter:site' value="@Trex2003" />
        <meta name='twitter:card' value="summary" />
        <meta name= 'twitter:image' value="/tarot.png" />
        <meta name= 'twitter:description' value="タロット占い作ってみた" />
        <link rel="icon" href="/card.ico" />
      </Head>

      <footer>
        <a
          href="https://www.trex-group.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/trex.png" alt="Trex" className="logo" />
        </a>
      </footer>
    </div>
  )
}
