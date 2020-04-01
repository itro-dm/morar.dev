import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import Providers from '../components/providers';

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
      <Providers pathname={pathname}>
        <Component {...pageProps} />
      </Providers>
    );
  }
}

export default ReactApp;
