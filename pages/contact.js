import Head from 'next/head';
import Header from '@components/Header';

export default function Contact() {
  return (
    <div className="incontainer" style={{ backgroundColor: '#F1EEEE' }}>
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
        <contacst style={{ paddingRight: '10vw' }}>
          <h1>Flavius M. De Jesu</h1>
          <br/>Ready to explore collaboration opportunities or have a cool project in mind?<br/>Let's bring our ideas to life together!<br/>Alternatively, feel free to drop a friendly 'hello' – I'm all ears!<br/><br/> 
          <a href='mailto:Flavius.xh@gmail.com' style={{ fontSize: '17px', textDecoration: 'underline', color: 'black', font: '' }}>Flavius.xh@gmail.com</a><br/>
          <a href='https://instagram.com/papolele' style={{ fontSize: '17px', textDecoration: 'underline', color: 'black', font: '' }}>@Papolele</a>
        </contacst>
        
        <center>
        <h2 style={{ marginTop: '0px'}}>Socials</h2>
        <p className="bio" style={{ fontSize: '2.5vh', fontWeight: "Normal", paddingRight: '10px' }}>
          <a href="https://www.instagram.com/papolele/"><img src="/Instagram.png" alt="Visit my Instagram!" style={{ width: '40px', marginLeft: '10px', marginRight: '10px' }}/></a>
          <a href="https://www.youtube.com/@papolele"><img src="/Youtube.png" alt="Visit my Youtube!" style={{ width: '40px', marginLeft: '10px', marginRight: '10px' }}/></a>
          <a href="https://ririungan.semipalar.sch.id/flavius"><img src="/Ririungan.png" alt="Visit my Blog!" style={{ width: '40px', marginLeft: '10px', marginRight: '10px' }}/></a>
          <a href="https://open.spotify.com/user/wn4wwd9pdiqkbde9h6efmwb3y"><img src="/Spotify.png" alt="Visit my Spotify!" style={{ height: '40px', marginLeft: '10px', marginRight: '10px' }}/></a>
        </p>
        </center>
        <br/>
      </main>
    </div>
  );
}