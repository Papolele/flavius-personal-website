import { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '@components/Footer';

const descriptions = [
  "Gamer", "Creator", "Maker", "Innovator", "Developer", "Designer", "Coder", "Hacker", "Artist",];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [age, setAge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
    }, 2500);
    const birthdate = new Date('2007-02-17');
    const today = new Date();
    const diff = today - birthdate;
    const ageInYears = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
    setAge(ageInYears);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="incontainer" style={{ backgroundColor: '#F1EEEE' }}>
      <Head>
        <title>Flavius!</title>
        <link rel="icon" href="Icon.PNG" />
      </Head>
      <main>
        <h1 style={{ fontSize: '10vw', marginTop: '2px', marginBottom: '9px'}}>
            Not your typical<br/>
            {descriptions[index]}.
        </h1>
        <p className="bio" style={{ fontSize: '2.5vh', fontWeight: "Normal", paddingRight: '10px' }}>
        I'm Flavius, a {age}-year-old student at <a href='https://www.instagram.com/kpb.smipa'>KPB Semi Palar</a> with a passion for creating things.<br></br>
        Whether it's coding, designing, or exploring new projects, I love the process of making stuff.<br></br>
        Join me on my journey as I navigate the world of learning and creation!
        </p>
        
        <a href="/main" style={{ width: 'fit-content', borderRadius: '8px' }}>
          <button className="button-primary">
            Begin Journey!
          </button>
        </a>
      </main>

      
      <Footer/>
    </div>
  );
}
