import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer} style={{ backgroundColor: '#F1EEEE' }}>
        <a href=""><img src="/Icon.PNG" alt="Flavius Logo" className={styles.logo} /></a>
        <a href="https://www.instagram.com/papolele/"><img src="/ig.webp" alt="Visit my insta!" className={styles.instagram} /></a>
      </footer>
    </>
  )
}
