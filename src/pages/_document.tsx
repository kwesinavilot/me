import { createGetInitialProps } from '@mantine/next';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />

          <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "7b693d048452436691b54a10a639f046"}'></script>
        </body>
      </Html>
    );
  }
}