import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import Providers from '../components/providers';
import Head from 'next/head';

type IAppProps = {
  pathname: string;
};

type IAppInitial = AppInitialProps & {
  pathname: string;
};

class ReactApp extends App<IAppProps> {
  static async getInitialProps(context: AppContext): Promise<IAppInitial> {
    let pageProps = {};
    const { Component, ctx } = context;
    const { pathname } = ctx;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
      pathname,
    };
  }

  render(): ReactElement {
    const { Component, pageProps, pathname } = this.props;

    return (
      <>
        <Head>
          <title>Dmitry Morar</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta
            name="viewport"
            content="initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, width=device-width, minimal-ui"
          />
        </Head>

        <Providers pathname={pathname}>
          <Component {...pageProps} />
        </Providers>
      </>
    );
  }
}

export default ReactApp;
