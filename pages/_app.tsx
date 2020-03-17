import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import Providers from '../components/providers';

class ReactApp extends App<AppProps> {
  static async getInitialProps(context: AppContext): Promise<AppInitialProps> {
    let pageProps = {};
    const { Component, ctx } = context;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render(): ReactElement {
    const { Component, pageProps } = this.props;
    return (
      <Providers>
        <Component {...pageProps} />
      </Providers>
    );
  }
}

export default ReactApp;
