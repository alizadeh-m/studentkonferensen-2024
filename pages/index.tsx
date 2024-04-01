import Head from 'next/head';
import styles from '../styles/layout.module.css';
import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Head>
        <title>Start</title>
        <meta name='OP Studentkonferens 2024' content='OP Studentkonferens 2024' />
      </Head>

      <main className={styles.LayoutWrapper}>
        <Image
          alt='studentkonferensen'
          width={700}
          height={700}
          src='/images/Studentkonferensen_logo_svart.svg'
        />
      </main>
    </>
  );
}

export default Home;
