import Document, { DocumentProps, Head, Html, Main, NextScript } from 'next/document';
import React, { ReactElement } from 'react';
import { ServerStyleSheet } from '../styles/themed-components';
import { GlobalStyles } from '../styles/global';

class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(
              <>
                <GlobalStyles />
                <App {...props} />
              </>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): ReactElement {
    return (
      <Html>
        <Head>
          <title>Dmitry Morar</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
