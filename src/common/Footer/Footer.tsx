import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerName}>
          <Link
            href={'https://www.linkedin.com/in/maryam-alizadeh-22804397/'}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLinkName}
          >
            Maryam Alizadeh
          </Link>
          <div
            className={styles.footerLinkWrapper}
          >
          <Link
            className={styles.footerLinkName}
            href="https://omegapoint.se/"
            target="_blank"
            rel="noopener noreferrer"
          >Omegapoints</Link>
          Studentkonferens 2024
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
export { Footer };
