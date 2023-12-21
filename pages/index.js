import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  const [index, setIndex] = useState(0);
  const descriptions = [
    Not a typical"<code>Gamer</code>",
    "<code>Hacker</code>",
    "<code>Kid</code>",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the index, looping back to 0 when it reaches the end
      setIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
    }, 3000); // Change the interval (in milliseconds) as needed

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          {descriptions[index]}
        </p>
      </main>

      <Footer />
    </div>
  );
}
