import styles from './Footer.Header.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer} style={{ backgroundColor: '#F1EEEE' }}>
        <a href=""><img src="/Icon.PNG" alt="Flavius Logo" className={styles.logo} /></a>
      </footer>
    </>
  )
}
