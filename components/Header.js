import styles from './Footer.Header.module.css'

export default function Header({ title }) {
  return(
    <>
      <header className={styles.header} style={{ backgroundColor: '#F1EEEE' }}>
        <a href="/" style={{ margin: '.75vw', color: '#000000', textDecoration: 'none'}}>ABOUT</a>
        <a href="" style={{ margin: '.75vw', color: '#000000', textDecoration: 'none'}}>PROJECTS</a>
        <a href="/contact" style={{ margin: '.75vw', color: '#000000', textDecoration: 'none'}}>CONTACT</a>
        <a href=""><img src="/Icon.PNG" alt="Flavius Logo" className={styles.logo} /></a>
      </header>
    </>
  )
}
