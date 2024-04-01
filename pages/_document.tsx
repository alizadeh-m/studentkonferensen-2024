import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='sv'>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
