import styles from '../styles/notFound.module.css';
import React from 'react';

const NotFoundPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.notFound}>
        <h1 className={styles.heading}>Nope. Inget här för dig 😬</h1>
      </div>
    </main>
  );
}

export default NotFoundPage;
