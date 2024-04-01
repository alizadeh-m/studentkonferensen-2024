import styles from './InfoView.module.css';

const InfoView = () => {
  return (
    <div className={styles.mainWrapper}>
      <h1 className={styles.heading}>✨ Tre steg att följa för att publicera din site ✨</h1>
      <div>
        <div className={styles.sectionWrapper}>
          <h2>Verktyg</h2>
          <ul className={styles.sectionList}>
            <li><a href={'https://nextjs.org'} className={styles.link}>Nextjs</a></li>
            <li><a href={'https://github.com/'} className={styles.link}>Github</a></li>
            <li><a href={'https://www.netlify.com/'} className={styles.link}>Netlify</a></li>
          </ul>
        </div>
        <div className={styles.sectionWrapper}>
          <h2>NextJS</h2>
          <ul className={styles.sectionList}>
            <li><a href={'https://nextjs.org/docs'} className={styles.link}> Nextjs dokumentation</a></li>
            <li><a href={'https://frontend-digest.com/the-benefits-of-using-nextjs-in-2021-4f071ab6fd0'} className={styles.link}>Varför Nextjs?</a></li>
            <li><a href={'https://nextjs.org/conf'} className={styles.link}>Nextjs konferens 2023</a></li>
            <li><a href={'https://www.youtube.com/watch?v=Ke90Tje7VS0'} className={styles.link}>React tutorial</a></li>
          </ul>

        </div>
        <div className={styles.sectionWrapper}>
          <h2>Github</h2>
          <a href={'https://github.com/alizadeh-m/studentkonferensen-2024-demo'} className={styles.link}>Koden till demo siten</a>
          <br/>
          <h3>Koppla en Github repository till Netlify:</h3>
          <p>
            {`I Github gå till Settings -> Applications -> Netlify -> Configure -> (scrolla ner) Repository access`}
          </p>
        </div>
        <div className={styles.sectionWrapper}>
          <h2>Netlify</h2>
          <a href={'https://docs.netlify.com/'} className={styles.link}> Netlify dokumentation </a>
          <br/>
          <h3>Koppla Netlify till ditt Github konto:</h3>
          <p>
            {`I Netlify gå till User Settings -> Connected Accounts -> Edit Settings -> Connect`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoView;
export { InfoView };
