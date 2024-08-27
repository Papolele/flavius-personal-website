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
        <h1 style={{ fontSize: '7vw', marginTop: '2px', marginBottom: '10px' }}>
            Hey, Im Flavius!<br/>
        </h1>

        

        <p className="bio" style={{ fontSize: '2.5vh', paddingRight: '10px' }}>
        <strong>Stuff that I did/do/haven't do/experiences/achievements.</strong> <br/>
        you get it.
        </p>



        <div className="projectlist">
          <h2 className="content" style={{ fontSize: '3vh', fontWeight: "bold", textDecoration: 'underline' }}>
            Trumpet lesson with Flavius!
          </h2>
          A interactive site customized just for me to learn trumpet! <br/>
          Embark on my journey to conquer trumpets.
          <br/><a href="/trumpet" style={{ width: 'fit-content', borderRadius: '1px' }}> <button className="button-primary">Enter!</button></a>
        </div>

        <div className="projectlist">
          <h2 className="content" style={{ fontSize: '3vh', fontWeight: "bold", textDecoration: 'underline' }}>
            Projekt Flasche!
          </h2>
          An ongoing school project to recycle<br/>
          plastic bottles and produce 3D printer filaments.
          <br/><a href="/projekt-flasche" style={{ width: 'fit-content', borderRadius: '1px' }}> <button className="button-primary">Enter!</button></a>
        </div>

        <div className="projectlist">
          <h2 className="content" style={{ fontSize: '3vh', fontWeight: "bold", textDecoration: 'underline' }}>
            Auto Bed Leveler!
          </h2>
          An ongoing open-source project with a vision <br/>
          to make 3D Printer Auto Bed Leveling more accessible.
          <br/><a href="/main" style={{ width: 'fit-content', borderRadius: '1px' }}> <button className="button-primary">Underconstruction!</button></a>
        </div>

        <div className="projectlist">
          <h2 className="content" style={{ fontSize: '3vh', fontWeight: "bold", textDecoration: 'underline' }}>
            Scouting!
          </h2>
          Community I've been a part of since I was a child!
          <br/><a href="/main" style={{ width: 'fit-content', borderRadius: '1px' }}> <button className="button-primary">Underconstruction!</button></a>
        </div>

        <div className="projectlist">
          <h2 className="content" style={{ fontSize: '3vh', fontWeight: "bold", textDecoration: 'underline' }}>
            Competitions!
          </h2>
          My past competitions experience's! <br/>
          I kinda hate competitions, they're to serious and lame.
          <br/><a href="/main" style={{ width: 'fit-content', borderRadius: '1px' }}> <button className="button-primary">Underconstruction!</button></a>
        </div>

        <div className="projectlist">
          <h2 className="content" style={{ fontSize: '3vh', fontWeight: "bold", textDecoration: 'underline' }}>
            Eh?!
          </h2>
          Unnecessary but fun projects! <br/>
          Things I do for personal pleasure.
          <br/><a href="/main" style={{ width: 'fit-content', borderRadius: '1px' }}> <button className="button-primary">Underconstruction!</button></a>
        </div>

        <div className="projectlist">
          <h2 className="content" style={{ fontSize: '3vh', fontWeight: "bold", textDecoration: 'underline' }}>
            THERE'S SO MUCH MORE!
          </h2>
          Too much things for the site creator to handle! <br/>
          Check the too much things on my socials!
          <br/><a href="/contact" style={{ width: 'fit-content', borderRadius: '1px' }}> <button className="button-primary">Enter!</button></a>
        </div>

        <br/>
        <content style={{ fontWeight:'bold', paddingRight: '10px' }}>
        Sorry for the inconvenience,<br/>The main page is still underconstruction!!<br/> 
        🐸
        </content>
      </main>
    </div>
  );
}
