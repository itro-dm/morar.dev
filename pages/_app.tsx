import App, { AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import GlobalStyles from '../styles/global';
import Providers from '../components/providers';

class ReactApp extends App<AppProps> {
  render(): ReactElement {
    const { Component, pageProps } = this.props;
    return (
      <Providers>
        <GlobalStyles />
        <Component {...pageProps} />
      </Providers>
    );
  }
}

export default ReactApp;
