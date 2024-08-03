import Head from 'next/head';
import Header from '@components/Header';
import { useState, useEffect } from 'react';

export default function Main() {
  const [quote, setQuote] = useState('');
  const [pistonCombination, setPistonCombination] = useState('');
  const [noteImages, setNoteImages] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    const quotes = [
      "Practice makes progress, not perfection.",
      "Every note you play is a step towards mastery.",
      "Consistency is the key to unlocking your potential.",
      "Focus on your breath, and the music will follow.",
      "Small daily improvements are the key to long-term success.",
      "Your dedication will pay off in beautiful melodies.",
      "The more you practice, the easier it gets.",
      "Push through the tough notes; they're making you better.",
      "Believe in your ability to improve with each session.",
      "Embrace the challenge; it's shaping you into a great musician.",
      "Every mistake is a lesson in disguise.",
      "Stay patient and trust the process.",
      "Visualize your success, then make it happen.",
      "Your trumpet is an extension of your soul; let it sing.",
      "Remember why you started and keep that passion alive.",
      "Your hard work is creating a beautiful sound.",
      "Keep your eyes on the goal, and your fingers on the keys.",
      "Music is the language of the spirit; let it flow through you.",
      "Dedication and practice will take you places.",
      "Embrace the journey, every note is part of your story.",
      "Your potential is limitless with practice.",
      "Enjoy the process of becoming better.",
      "Practice with purpose and passion.",
      "Your commitment to practice is a testament to your love for music.",
      "The sound of your trumpet is the sound of your dedication.",
      "Perseverance through practice leads to excellence.",
      "Feel the music and let it guide your practice.",
      "Each practice session brings you closer to your dreams.",
      "Your trumpet is a tool; your heart is the artist.",
      "Believe in the power of daily practice.",
      "Music is a journey, not a destination.",
      "Your hard work today is the applause of tomorrow.",
      "Every scale you play builds your foundation.",
      "Precision and passion make perfect notes.",
      "Let your practice sessions be a symphony of effort and joy.",
      "Your dedication is your superpower.",
      "The more you practice, the more you grow.",
      "Stay disciplined and watch your skills soar.",
      "Each note played is a victory earned.",
      "Your practice today is your performance tomorrow.",
      "Music is the reward for your hard work.",
      "Let your passion for the trumpet drive your practice.",
      "Embrace the grind; it leads to greatness.",
      "Play with heart and practice with discipline.",
      "Your trumpet journey is unique; enjoy every step.",
      "The sound of your trumpet is the sound of your progress.",
      "Dedication to practice is dedication to your craft.",
      "Let your music be an expression of your dedication.",
      "Practice is the bridge between goals and achievement.",
      "Your practice time is an investment in your musical future."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  const noteToPiston = {
    'C': [],
    'D': [1, 3],
    'E': [1, 2],
    'F': [1],
    'G': [],
    'A': [1, 2],
    'B': [2]
  };

  

  const handleButtonClick = (note) => {
    setPistonCombination(noteToPiston[note]);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleImageUrlBlur = () => {
    if (imageUrl) {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        setNoteImages([...noteImages, imageUrl]);
        setImageUrl('');
        setErrorMessages([]);
      };
      img.onerror = () => {
        setErrorMessages([...errorMessages, `Invalid URL: ${imageUrl}`]);
        setImageUrl('');
      };
    }
  };

  return (
    
    <div className="trcontainer" style={{ backgroundColor: '#F1EEEE', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Head>
        <title>Flavius!</title>
        <link rel="icon" href="Icon.PNG" />
      </Head>
      <Header />
      
      <main>
        
        <p className="bio" style={{ fontSize: '2.5vh', textAlign: 'center' }}>
          <strong>Hey Flavius!</strong> <br />
          {quote}
        </p>
        <div style={{ textAlign: 'center' }}>
          {['C', 'D', 'E', 'F', 'G', 'A', 'B'].map(note => (
            <button
              key={note}
              onClick={() => handleButtonClick(note)}
              style={{ margin: '5px', padding: '10px', fontSize: '1.5vh' }}
            >
              {note}
            </button>
          ))}
        </div>
        <div className="trumpet" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="piston" id="piston1">
            <p className="piston-label">1</p>
            <div className={`piston-visual ${pistonCombination.includes(1) ? 'pressed' : ''}`}></div>
          </div>
          <div className="piston" id="piston2">
            <p className="piston-label">2</p>
            <div className={`piston-visual ${pistonCombination.includes(2) ? 'pressed' : ''}`}></div>
          </div>
          <div className="piston" id="piston3">
            <p className="piston-label">3</p>
            <div className={`piston-visual ${pistonCombination.includes(3) ? 'pressed' : ''}`}></div>
          </div>
        </div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <input
            type="text"
            value={imageUrl}
            onChange={handleImageUrlChange}
            onBlur={handleImageUrlBlur}
            placeholder="Enter image URL and press Enter"
            style={{ padding: '10px', fontSize: '1.5vh', marginRight: '10px', width: '300px' }}
          />
          {errorMessages.length > 0 && (
            <div style={{ marginTop: '10px', color: 'red' }}>
              {errorMessages.map((msg, index) => (
                <p key={index}>{""}</p>
              ))}
            </div>
          )}
          <div style={{ marginTop: '10px', display: 'flex', overflowX: 'auto', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            {noteImages.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Note ${index}`}
                style={{ height: '300px', objectFit: 'contain'}}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
