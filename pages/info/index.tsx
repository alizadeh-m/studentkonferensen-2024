import InfoView from '../../src/InfoView/InfoView';
import Head from 'next/head';
import styles from '../../styles/layout.module.css';
import React from 'react';

export default function Index() {
  return (
    <>
      <Head>
        <title>Informationssida</title>
        <meta name='Informationssida' content='Informationssida' />
      </Head>

      <main className={styles.LayoutWrapper}>
        <InfoView />
      </main>
    </>
  );
}
