import ResumeView from '../../src/ResumeView/ResumeView';
import Head from 'next/head';
import styles from '../../styles/layout.module.css';
import React from 'react';

export default function Index() {
  return(
    <>
      <Head>
        <title>Mitt CV</title>
        <meta name='Mitt CV' content='Mitt CV' />
      </Head>

      <main className={styles.LayoutWrapper}>
        <ResumeView />
      </main>
    </>
  );
}
