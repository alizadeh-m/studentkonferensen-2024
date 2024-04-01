import Footer from '../src/common/Footer/Footer';
import Menu from '../src/common/Menu/Menu';
import styles from './layout.module.css'

export const metadata = {
  icons: { icon: '/icon.png' },
}

export default function RootLayout({ children}: {children: React.ReactNode;}) {
  return (
    <html lang='sv'>
      <head>
        <title>OP Studentkonferens 2024</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
      </head>
      <body className={styles.LayoutBody}>
        <Menu />
        <main className={styles.LayoutWrapper}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
