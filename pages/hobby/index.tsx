import dynamic from 'next/dynamic';
import Spinner from '../../src/common/Spinner/Spinner';
import Head from 'next/head';
import styles from '../../styles/layout.module.css';
import React from 'react';

const DrawView = dynamic(
  () => import('../../src/DrawView/DrawView'),
  { loading: () => <Spinner />, ssr: false }
);

export default function Index() {
  return (
    <>
      <Head>
        <title>Hobbyprojekt</title>
        <meta name='Hobbyprojekt' content='Hobbyprojekt' />
      </Head>

      <main className={styles.LayoutWrapper}>
        <DrawView />
      </main>
    </>
  );
}
