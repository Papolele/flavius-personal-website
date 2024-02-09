import Head from 'next/head';
import Header from '@components/Header';

export default function Contact() {
  return (
    <div className="container" style={{ backgroundColor: '#F1EEEE' }}>
      <Head>
        <title>Flavius!</title>
        <link rel="icon" href="Icon.PNG" />
      </Head>
      <Header/>
      <main>
        <a href='/main' style={{ textDecoration: 'none', color: '#000000', fontSize: '3vh' }}>← Go Back</a>
        <h1 style={{ fontSize: '10vw', marginTop: '0px', marginBottom: '10px' }}>
            Get In Touch!<br/>
        </h1>
        <p className="bio" style={{ fontSize: '2.5vh', fontWeight: "Normal", paddingRight: '10px' }}>
        <center>
          <h1>Social</h1>
          <a href="https://www.instagram.com/papolele/"><img src="/ig.webp" alt="Visit my Instagram!" style={{ width: '40px', marginLeft: '10px', marginRight: '10px' }}/></a>
          <a href="https://www.youtube.com/@papolele"><img src="/yt.webp" alt="Visit my Youtube!" style={{ width: '40px', marginLeft: '10px', marginRight: '10px' }}/></a>
        </center>
        </p>
        
        <br/>
      </main>
    </div>
  );
}