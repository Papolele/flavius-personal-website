import styles from './Footer.Header.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer} style={{ backgroundColor: '#F1EEEE' }}>
        <a href="https://www.instagram.com/papolele/"><img src="/ig.webp" alt="Visit my insta!" className={styles.instagram} /></a>
        <a href=""><img src="/Icon.PNG" alt="Flavius Logo" className={styles.logo} /></a>
      </footer>
    </>
  )
}
