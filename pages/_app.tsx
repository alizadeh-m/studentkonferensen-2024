import '../styles/global.css';
import Footer from '../src/common/Footer/Footer';
import Menu from '../src/common/Menu/Menu';
import { AppProps } from 'next/app';
import Head from 'next/head';
import styles from '../styles/layout.module.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>OP Studentkonferens 2024</title>
        <link rel='shortcut icon' href='./favicon.ico' />
        <meta property='og:title' content='OP Studentkonferens 2024' key='title' />
      </Head>
      <div className={styles.LayoutBody}>
        <Menu />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
