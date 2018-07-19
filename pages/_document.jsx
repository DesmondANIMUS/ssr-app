import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDoc extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>NextJS wa SUGOIII-desu ne!</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
