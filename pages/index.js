import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Flavius!</title>
        <link rel="icon" href="/Icon.PNG" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Not your typical <code>Maker</code>!
        </p>
      </main>

      <Footer />
    </div>
  )
}
