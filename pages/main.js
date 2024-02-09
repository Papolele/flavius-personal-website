import Head from 'next/head';
import Header from '@components/Header';

export default function Main() {
  return (
    <div className="container" style={{ backgroundColor: '#F1EEEE' }}>
      <Head>
        <title>Flavius!</title>
        <link rel="icon" href="Icon.PNG" />
      </Head>
      <Header/>
      <main>
        <h1 style={{ fontSize: '7vw', marginBottom: '10px' }}>
            Hey, Im Flavius!<br/>
        </h1>
        <p className="bio" style={{ fontSize: '2.5vh', fontWeight: "Normal", paddingRight: '10px' }}>
        I love to make stuff
        </p>
        
        <br/>
        <content style={{ fontWeight:'bold', paddingRight: '10px' }}>
        MAIN PAGE UNDER CONSTRUCTION! COMEBACK LATER!<br/>meanwhile check out my socials in the contact page.
        </content>
      </main>
    </div>
  );
}